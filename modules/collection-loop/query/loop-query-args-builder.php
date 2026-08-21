<?php

namespace ElementorPro\Modules\CollectionLoop\Query;

use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Registry;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Loop_Query_Args_Builder {
	public static function from_resolved( array $value ): array {
		$registry = Template_Type_Registry::instance();
		$id       = is_string( $value['template_type'] ?? null ) && '' !== $value['template_type']
			? $value['template_type']
			: $registry->get_default_id();

		$type = $registry->get( $id ) ?? $registry->get_default();

		return null === $type ? [] : $type->build_query_args( $value );
	}
}
