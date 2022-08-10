<?php
namespace ElementorPro\Data;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// TODO: Move to core.
class Http_Status {
	// Successful responses
	const OK = 200;
	const CREATED = 201;
	const NO_CONTENT = 204;

	// Client error responses
	const BAD_REQUEST = 400;
	const UNAUTHORIZED = 401;
	const FORBIDDEN = 403;
	const NOT_FOUND = 404;

	// Server error responses
	const INTERNAL_SERVER_ERROR = 500;
}
