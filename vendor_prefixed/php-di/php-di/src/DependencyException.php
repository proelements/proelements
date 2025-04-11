<?php

declare (strict_types=1);
namespace ElementorProDeps\DI;

use ElementorProDeps\Psr\Container\ContainerExceptionInterface;
/**
 * Exception for the Container.
 */
class DependencyException extends \Exception implements ContainerExceptionInterface
{
}
