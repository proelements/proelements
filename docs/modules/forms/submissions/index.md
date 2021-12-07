# Submissions

The "Submissions" component is responsible for saving form submissions records in the database. It should be some kind of log that saves the user input data + status about the other actions assigned to the specific form. There are 4 subjects that will be explained in this document: database, "save-to-database" action, REST API, and the admin page.

## Database

When the admin of the website enable 'submission' experiment the module immediately runs the database migrations (`modules/forms/submissions/database/migration.php`) which create 3 tables:

1. `e_submissions` - Holds the submission itself ( related_post, related_form, and some metadata ).
2. `e_submissions_values` - Each row has the field key, the input of the user, and the `submission_id`.
3. `e_submissions_action_log` - The table is a log that represents the other actions that run for the current submission (e.g, email, Mailchimp integration, etc.). Each row has a status, and a log message if exists.

## Save to Database Action

This is a regular form action that extends the Base Action of Elementor which does 3 things:
1. Creates a new submission in the `e_submissions` table and multiple rows in `e_submissions_values` based on the form fields.
2. Saves a snapshot of the current form fields - this will help us later for showing the submissions result in the admin page to export the form values as CSV.
3. Listens to the responses of all the other form actions and saves them in the `e_submissions_action_log` table (this is the reason why the "save-to-database" action must be the first action that runs).

## REST API

To show the admin all the submissions, the module introduces a few REST endpoints that return the submission data:
1. GET `/submissions` - which returns all the submissions without the values.
2. GET `/submissions/:id` - which returns a specific submission with its values.
3. GET `/forms` - which returns all the forms fields.

- There are more routes that are less important such as the "export" route and "referer" route.
- All those routes are available only for authenticated users that have the role of "admin".
- Those routes can be used outside the admin page.

## Admin 

The admin page is responsible for showing all the submissions to the admin of the website. The submissions can be sorted, filtered, and exported, and edited. The page itself is built with React to provide a better user experience and uses the REST API as the source of data. 

## Attention Needed

- The DB migration is an independent system and doesn't use Elementor's upgrade system.
- To create a new migration, just add a new class to the migrations folder and register it in the static prop `migrations` in `modules/forms/submissions/database/migration.php` + make sure to update the const `CURRENT_DB_VERSION` to the new version that you created.
- Please review other migration files to make sure we don't repeat some issues twice (like `max index length`, and `charset` for the tables).
- If you add some more data that belongs to a specific user, make sure to adjust `modules/forms/submissions/personal-data.php`. This class is responsible for exporting and removing the user-specific data, in order to get in line with the rules of GDPR, CCPA, etc.
