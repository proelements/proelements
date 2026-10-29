<?php

namespace ElementorPro\Modules\CollectionLoop\Utils;

use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item\Collection_Loop_Item;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * v3-parity alternate template selection per grid slot. Apply-once state
 * accumulates as slots are picked, so a selector must be walked in ascending
 * slot order and a fresh one is needed to walk again from slot 0.
 */
class Alternate_Selector {
	/** @var object */
	private $template;

	/** @var array<int, array{element: object, apply_once: bool, repeat_every: int, static_position: bool}> */
	private $alternates;

	/** @var array<string, true> */
	private $used_apply_once_ids = [];

	/**
	 * @param object   $template   The main (index 0) loop item template.
	 * @param object[] $alternates The alternate loop items (siblings after the template).
	 */
	public function __construct( $template, array $alternates ) {
		$this->template   = $template;
		$this->alternates = array_reverse( array_map( [ $this, 'to_config' ], $alternates ) );
	}

	/**
	 * Build a selector out of a loop layout's children, or null when there is no
	 * item template to fall back on.
	 *
	 * @param object[] $loop_items
	 */
	public static function for_loop_items( array $loop_items ): ?self {
		$template = $loop_items[ Collection_Loop::TEMPLATE_CHILD_INDEX ] ?? null;

		if ( ! $template ) {
			return null;
		}

		return new self( $template, array_slice( $loop_items, 1, Collection_Loop_Item::MAX_ALTERNATES ) );
	}

	/**
	 * Whether any alternate inserts a slot instead of replacing an item. Statics
	 * inflate the slot count, so callers use this to decide whether pagination
	 * has to be driven by a slot map instead of `paged`.
	 */
	public function has_static_alternates(): bool {
		foreach ( $this->alternates as $config ) {
			if ( $config['static_position'] && Collection_Loop_Item::REPEAT_EVERY_DISABLED !== $config['repeat_every'] ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * The slots one collection item occupies, starting at $start_slot.
	 *
	 * A static alternate takes a slot without consuming the item, and takes
	 * another once it comes due again — that is what keeps "every 2" landing on
	 * every second slot. An alternate matching *every* slot would starve the item
	 * forever, so only that one is capped at a single slot per item; any other
	 * period leaves a slot it doesn't claim, ending the walk on the item's own
	 * template.
	 *
	 * @return array<int, array{element: object, is_static: bool}>
	 */
	public function consume_item_slots( int $start_slot ): array {
		$picks        = [];
		$excluded_ids = [];
		$slot         = $start_slot;

		while ( true ) {
			$config  = $this->find_alternate_for_index( $slot, $excluded_ids );
			$picks[] = $this->to_pick( $config );

			if ( null === $config || ! $config['static_position'] ) {
				return $picks;
			}

			if ( $this->matches_every_slot( $config ) ) {
				$excluded_ids[ $config['element']->get_id() ] = true;
			}

			++$slot;
		}
	}

	/**
	 * @return array{element: object, is_static: bool}
	 */
	public function select_for_index( int $index ): array {
		return $this->to_pick( $this->find_alternate_for_index( $index, [] ) );
	}

	/**
	 * @param array<string, true> $excluded_ids Alternates barred from taking another
	 *                                          slot of the current item.
	 *
	 * @return array{element: object, apply_once: bool, repeat_every: int, static_position: bool}|null
	 */
	private function find_alternate_for_index( int $index, array $excluded_ids ): ?array {
		foreach ( $this->alternates as $config ) {
			if ( ! $this->is_available( $config, $excluded_ids ) ) {
				continue;
			}

			if ( ! $this->matches_at_index( $config, $index ) ) {
				continue;
			}

			if ( $config['apply_once'] ) {
				$this->used_apply_once_ids[ $config['element']->get_id() ] = true;
			}

			return $config;
		}

		return null;
	}

	/**
	 * @return array{element: object, is_static: bool}
	 */
	private function to_pick( ?array $config ): array {
		if ( null === $config ) {
			return [
				'element'   => $this->template,
				'is_static' => false,
			];
		}

		return [
			'element'   => $config['element'],
			'is_static' => $config['static_position'],
		];
	}

	private function matches_every_slot( array $config ): bool {
		return ! $config['apply_once'] && Collection_Loop_Item::REPEAT_EVERY_ALL_SLOTS === $config['repeat_every'];
	}

	private function to_config( $element ): array {
		return [
			'element'         => $element,
			'apply_once'      => (bool) $element->get_atomic_setting( Collection_Loop_Item::ALTERNATE_APPLY_ONCE_PROP ),
			// Negative values are treated as their absolute value (-2 behaves like 2).
			// This is a defensive guard for data saved outside the control's own min restriction.
			'repeat_every'    => abs( (int) $element->get_atomic_setting( Collection_Loop_Item::ALTERNATE_REPEAT_EVERY_PROP ) ),
			'static_position' => (bool) $element->get_atomic_setting( Collection_Loop_Item::ALTERNATE_STATIC_POSITION_PROP ),
		];
	}

	private function is_available( array $config, array $excluded_ids ): bool {
		$id = $config['element']->get_id();

		if ( isset( $excluded_ids[ $id ] ) ) {
			return false;
		}

		if ( ! $config['apply_once'] ) {
			return true;
		}

		return ! isset( $this->used_apply_once_ids[ $id ] );
	}

	private function matches_at_index( array $config, int $index ): bool {
		// Repeat_every of 0 means the alternate is turned off — it never matches.
		if ( Collection_Loop_Item::REPEAT_EVERY_DISABLED === $config['repeat_every'] ) {
			return false;
		}

		$one_based = $index + 1;

		if ( $config['apply_once'] ) {
			return $one_based === $config['repeat_every'];
		}

		return 0 === $one_based % $config['repeat_every'];
	}
}
