<?php

declare(strict_types=1);

namespace Parrot;

use Exception;

interface ParrotStrategy {
    function getSpeed(float $baseSpeed): float;
    function getCry(): string;
}

class EuropeanStrategy implements ParrotStrategy {
    public function getSpeed(float $baseSpeed): float
    {
        return $baseSpeed;
    }

    public function getCry(): string
    {
        return 'Sqoork!';
    }
}

class AfricanStrategy implements ParrotStrategy {
    public function __construct(
        private int $numberOfCoconuts,
    ) { }

    public function getSpeed(float $baseSpeed): float
    {
        return max(0, $baseSpeed - $this->getLoadFactor() * $this->numberOfCoconuts);
    }

    private function getLoadFactor(): float
    {
        return 9.0;
    }

    public function getCry(): string
    {
        return 'Sqaark!';
    }
}

class NorwegianStrategy implements ParrotStrategy {
    public function __construct(
        private float $voltage,
        private bool $isNailed
    ) { }

    public function getSpeed(float $baseSpeed): float
    {
        return $this->isNailed ? 0 : $this->getBaseSpeedWith($baseSpeed, $this->voltage);
    }

    private function getBaseSpeedWith($baseSpeed, float $voltage): float
    {
        return min(24.0, $voltage * $baseSpeed);
    }

    public function getCry(): string
    {
        return $this->voltage > 0 ? 'Bzzzzzz' : '...';
    }
}

class Parrot
{
    public function __construct(
        private ParrotStrategy $strategy
    ) {
    }

    /**
     * @throws Exception
     */
    public function getSpeed(): float
    {
        return $this->strategy->getSpeed($this->getBaseSpeed());
    }

    private function getBaseSpeed(): float
    {
        return 12.0;
    }

    /**
     * @throws Exception
     */
    public function getCry(): string
    {
        return $this->strategy->getCry();
    }
}
