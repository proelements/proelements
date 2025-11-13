<?php

namespace ElementorPro\Modules\LoopFilter\Query\Data;

class Query_Constants {
	public const DATA = [
		'AND' => [
			'separator' => [
				'decoded' => '+',
				'from-browser' => ' ',
				'encoded' => '%2B',
			],
			'operator' => 'AND',
			'relation' => 'AND',
		],
		'OR' => [
			'separator' => [
				'decoded' => '~',
				'from-browser' => '~',
				'encoded' => '%7C',
			],
			'operator' => 'IN',
			'relation' => 'OR',
		],
		'NOT' => [
			'separator' => [
				'decoded' => '!',
				'from-browser' => '!',
				'encoded' => '%21',
			],
			'operator' => 'NOT IN',
			'relation' => 'AND',
		],
		'DISABLED' => [
			'separator' => [
				'decoded' => '',
				'from-browser' => '',
				'encoded' => '',
			],
			'operator' => 'AND',
			'relation' => 'AND',
		],
	];
}
