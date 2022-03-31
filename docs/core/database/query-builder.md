# Query Builder

## Product Knowledge Base:

- [Laravel's Query Builder](https://laravel.com/docs/master/queries)

## Introduction:

Elementor's database Query Builder provides a convenient, fluent interface to creating and running database queries. 
It can be used to perform most database operations and is heavily inspired by [Laravel's Query Builder](https://laravel.com/docs/master/queries).

It integrates flawlessly with `WPDB` and automatically prepares and binds the SQL queries in order to prevent SQLi.

## Available Methods:

Most of the methods are self-explanatory, and those which have some caveats will be explained below.

- [`table()` / `from()`](#retrieve-all-rows-from-a-table---table--from)
- [`select()`](#retrieve-specific-columns-from-a-table---select)
- [`select_raw()`](#select-raw-columns---select_raw)
- [`add_sub_select()`](#add-a-sub-select---add_sub_select)
- [`add_count_select()`](#select-column-count---add_count_select)
- [`when()`](#add-conditional-query-operations---when)
- [`where()`](#filter-rows-by-conditions---where)
- `or_where()`
- [`where_null()`](#compare-to-null---where_null)
- `or_where_null()`
- [`where_column()`](#compare-column---where_column)
- `or_where_column()`
- [`where_in()`](#where-in---where_in)
- `or_where_in()`
- `where_not_in()`
- `or_where_not_in()`
- [`where_exists()`](#where-exists---where_exists)
- `or_where_exists()`
- `where_not_exists()`
- `or_where_not_exists()`
- `having_raw()`
- `or_having_raw()`
- [`join()`](#join-tables---join)
- `left_join()`
- `right_join()`
- [`limit()`](#limit-results---limit-offset)
- [`offset()`](#limit-results---limit-offset)
- [`order_by()`](#order-results---order_by)
- [`group_by()`](#group-results---group_by)
- [`find()`](#find--get-the-first-row-by-a-single-condition---find)
- [`first()`](#get-the-first-row-from-the-results---first)
- [`get()`](#get-query-results---get)
- [`to_sql()`](#get-sql-for-the-current-query---to_sql)
- [`insert()`](#insert-new-row-to-a-table---insert)
- [`update()`](#update-rows-in-a-table---update)
- [`delete()`](#delete-rows-from-a-table---delete)


## Running Database Quries:

Writing queries using the Query Builder is very similar to standard SQL syntax, just using composable functions.

> *Note:* All of the examples below are assumed to have `$query = new Query_Builder()`.

> *Note:* The Query Builder results always return a `Collection` instance (expect for `find()` & `first()` which return the first result).


### Retrieve All Rows From A Table - `table()` / `from()`:

Select data from a specific table using the `table()` method:

```PHP
$users = $query->table( 'users' )->get();

// Equivalent to: SELECT * FROM `users`
```

In addition, the method can receive a second parameter to define an alias:
```PHP
$users = $query->table( 'users', 'test' )->get();

// Equivalent to: SELECT * FROM `users` AS `test`
```


### Retrieve Specific Columns From A Table - `select()`:

By default, when a `select()` isn't provided, all of the columns are selected. But sometimes only specific columns are needed:

```PHP
$users = $query->select( [ 'id', 'user_name' ] )
    ->from( 'users' )
    ->get();

// Equivalent to: SELECT `id`, `user_name` FROM `users`
```

### Select Raw Columns - `select_raw()`:

When selecting raw columns, the `Query_Builder` won't prepare / bind the values, so it might cause SQLi - USE WITH CAUTION.

```PHP
$data = $query->select_raw( [ 1, 'AVG( id )', 'DATE( "1970-01-01" )' ] )
    ->from( 'users' )
    ->get();

// Equivalent to: SELECT 1, AVG( id ), DATE( "1970-01-01" ) FROM `users`
```

### Add A Sub Select - `add_sub_select()`:

Add a sub select (e.g. `(SELECT ... ) AS alias`) to the query.
This method expects a closure as a first parameter. The closure will receive a new instance of `Query_Builder` where a new query can be created.
The second parameter is an alias of the sub select:

```PHP
$data = $query->from( 'users' )
    ->select( [ 'id' ] )
    ->add_sub_select( function ( Query_Builder $q ) {
        $q->from( 'comments' )
            ->select_raw( [ 'COUNT( `replies`.`id` )' ] )
            ->where_column( 'comments.author_id', '=', 'users.id' );
    }, 'comments_count' )
    ->get();

/** 
 * Equivalent to: 
 * 
 * SELECT `id`,
 * ( 
 *      SELECT COUNT( `replies`.`id` ) 
 *      FROM `comments` 
 *      WHERE `comments`.`author_id` = `users`.`id`
 * ) AS `comments_count` 
 * 
 * FROM `users`
 */ 
```

### Select Column count - `add_count_select()`:

```PHP
$data = $query->from( 'users' )
    ->select( [ 'id' ] )
    ->add_count_select( 'id', 'users_count' )
    ->get();

// Equivalent to: SELECT `id`, COUNT( `id` ) FROM `users`
```

### Add Conditional Query Operations - `when()`:

Sometimes query operations need to be added based on conditions, so in order to be able to continue the functions 
concatenation flow with `if`s, there is a way to execute those operations on the fly.

This method expects a condition as a first parameter, and 2 closures as the other parameters. The closures will 
receive the current instance of the `Query_Builder` in order to modify it, and will also receive the condition as 
a second parameter.

The first callback is required and will be executed when the condition is truthy, while the second one is optional 
and will be executed when the condition is falsy.

```PHP
$users_ids = [ 1, 2, 3 ];

$data = $query->from( 'users' )
    ->select( [ 'id', 'user_name' ] )
    ->when( $users_ids, function( Query_Builder $q, $users_ids ) {
        $q->where_in( 'id', $users_ids );

    }, function( Query_Builder $q ) {
        $q->where( 'id', '=', 1 );
    } )
    ->get();

/** 
 * When `$users_ids` is truthy, it's equivalent to: 
 *  SELECT `id`, `user_name` FROM `users` WHERE `id` IN ( 1, 2, 3 )
 * 
 * When `$users_ids` is falsy, it's equivalent to: 
 *  SELECT `id`, `user_name` FROM `users` WHERE `id` = 1
 */
```


### Filter Rows by conditions - `where()`:

The `where()` method can filter the results and has multiple options depends on the provided parameters.

#### Simple - `where( string $column, string $operator, string $value )`

```PHP
$users = $query->from( 'users' )
    ->where( 'id', '=', 1 )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `id` = 1
```

#### Nested - `where( callable $callback )`

Used to support nested conditions.

```PHP
$users = $query->from( 'users' )
    ->where( 'user_name', 'like', '%a%' )
    ->where( function ( Query_Builder $q ) {
        $q->where( 'id', '=', 1 )
            ->or_where( 'id', '=', 2 );
    } )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `id` LIKE "%a%" AND ( `id` = 1 OR `id` = 2 )
```

#### Sub select - `where( string $column, string $operator, callable $callback )`

Used to support sub selects in `WHERE` statements.

```PHP
$users = $query->from( 'users' )
    ->where( 'user_name', '=', function ( Query_Builder $q ) {
        $q->select( [ 'author_name' ] )
            ->from( 'posts' )
            ->where( 'id', '=', 1 );
    } )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `user_name` = ( SELECT `author_name` FROM `posts` WHERE `id` = 1 )
```

#### Compare To NULL - `where_null()`

```PHP
$users = $query->from( 'users' )
    ->where_null( 'user_name' )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `user_name` IS NULL
```

#### Compare Columns - `where_column()`

```PHP
$users = $query->from( 'users' )
    ->where_column( 'user_name', '=', 'display_name' )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `user_name` = `display_name`
```

#### Where in - `where_in()`

```PHP
$users = $query->from( 'users' )
    ->where_in( 'id', [ 1, 2, 3 ] )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `id` IN ( 1, 2, 3 )
```

#### Where exists - `where_exists()`

Used to support `WHERE EXISTS` queries. The method expects a callback which receives a new instance of `Query_Builder`.

```PHP
$users = $query->from( 'users' )
    ->where_exists( function ( Query_Builder $q ) {
        $q->from( 'posts' )
            ->select_raw( [ 1 ] )
            ->where( 'posts.author_id', '=', 'users.id' );
    } )
    ->get();

// Equivalent to: SELECT * FROM `users` WHERE `id` IN ( 1, 2, 3 )
```

### Join Tables - `join()`:

The `join()` methods expects a callback which receives a new instance of `Join_Clause`.

```PHP
$users = $query->from( 'users' )
    ->join( function ( Join_Clause $q ) {
        $q->table( 'posts' )
            ->on_column( 'users.id', '=', 'posts.author_id' );
    } )
    ->get();

// Equivalent to: SELECT * FROM `users` JOIN `posts` ON `users`.`id` = `posts`.`author_id`
```

### Limit Results - `limit()`, `offset()`:

```PHP
$users = $query->from( 'users' )
    ->limit( 10 )
    ->offset( 2 )
    ->get();

// Equivalent to: SELECT * FROM `users` LIMIT 10 OFFSET 2
```

### Order Results - `order_by()`:

```PHP
$users = $query->from( 'users' )
    ->order_by( 'id', 'asc' )
    ->get();

// Equivalent to: SELECT * FROM `users` ORDER BY `id` ASC
```

### Group Results - `group_by()`:

```PHP
$users = $query->from( 'users' )
    ->group_by( 'id' )
    ->group_by( 'user_name' )
    ->get();

// Equivalent to: SELECT * FROM `users` GROUP BY `id`, `user_name`
```

### Find & Get The First Row By A Single Condition - `find()`:

```PHP
$users = $query->table( 'users' )->find( 1 );

// Equivalent to: SELECT * FROM `users` WHERE `id` = 1
```

The default column is `id`, but it can be overridden by passing a second parameter:

```PHP
$users = $query->table( 'users' )->find( 1, 'user_id' );

// Equivalent to: SELECT * FROM `users` WHERE `user_id` = 1
```

### Get The First Row From The Results - `first()`:

```PHP
$users = $query->table( 'users' )
    ->where( 'id', '=', 1 )
    ->first();

// Equivalent to: SELECT * FROM `users` WHERE `id` = 1 LIMIT 1
```

### Get Query Results - `get()`:

```PHP
var_dump( $query->table( 'users' )->get() );

// Output: Collection with all of the users inside.
```

### Get SQL For The Current Query - `to_sql()`:

Get the SQL string *without bindings*:

```PHP
echo $query->from( 'users' )
    ->where( 'id', '=', 1 )
    ->to_sql();

// Output: SELECT * FROM `users` WHERE `id` = %d
```

### Insert New Row To A Table - `insert()`:

Insert data to a table. The data should be an associative array with `column_name => value` pairs.

Unlike any other SQL action in the Query Builder, under the hood this function uses `WPDB`'s built-in `insert()` method.

```PHP
$inserted_id = $query->table( 'users' )
    ->insert( [
        'user_name' => 'admin',
        'password' => 'super_secret',
    ] );

// Equivalent to: INSERT INTO `users` ( `user_name`, `password` ) VALUES ( 'admin', 'super_secret' )
```

### Update Rows In A Table - `update()`:

Update rows in a table. The data should be an associative array with `column_name => value` pairs.

```PHP
$inserted_id = $query->table( 'users' )
    ->where( 'id', '=', 1 )
    ->update( [
        'email' => 'new_email@elementor.com',
    ] );

// Equivalent to: UPDATE `users` SET `email` = 'new_email@elementor.com' WHERE `id` = 1
```

### Delete Rows From A Table - `delete()`:

```PHP
$inserted_id = $query->table( 'users' )
    ->where( 'id', '=', 1 )
    ->delete();

// Equivalent to: DELETE FROM `users` WHERE `id` = 1
```
