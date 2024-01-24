<?php

declare(strict_types=1);

namespace Parrot;

use Exception;

class EuropeanStrategy {
    public function getSpeed(float $baseSpeed): float
    {
        return $baseSpeed;
    }

    public function getCry(): string
    {
        return 'Sqoork!';
    }
}

class AfricanStrategy {
    public function __construct(
        private int $numberOfCoconuts,
    ) { }

    public function getSpeed(float $baseSpeed): float
    {
        return max(0, $baseSpeed - $this->getLoadFactor() * $this->numberOfCoconuts);
    }

    public function getCry(): string
    {
        return 'Sqaark!';
    }

    private function getLoadFactor(): float
    {
        return 9.0;
    }
}

class NorwegianStrategy {
    public function __construct(
        private float $voltage,
        private bool $isNailed
    ) { }

    public function getSpeed(float $baseSpeed): float
    {
        return $this->isNailed ? 0 : $this->getBaseSpeedWith($baseSpeed, $this->voltage);
    }

    public function getCry(): string
    {
        return $this->voltage > 0 ? 'Bzzzzzz' : '...';
    }

    private function getBaseSpeedWith($baseSpeed, float $voltage): float
    {
        return min(24.0, $voltage * $baseSpeed);
    }

}

class Parrot
{
    public function __construct(
        private $strategy
    ) {

    }

    /**
     * @throws Exception
     */
    public function getSpeed(): float
    {
        if ($this->strategy) {
            return $this->strategy->getSpeed($this->getBaseSpeed());
        }
        throw new Exception('Should be unreachable');
    }

    /**
     * @throws Exception
     */
    public function getCry(): string
    {
        if ($this->strategy) {
            return $this->strategy->getCry();
        }
        return match ($this->type) {
            ParrotTypeEnum::EUROPEAN => (new EuropeanStrategy())->getCry(),
            ParrotTypeEnum::AFRICAN => (new AfricanStrategy($this->numberOfCoconuts))->getCry(),
            ParrotTypeEnum::NORWEGIAN_BLUE => (new NorwegianStrategy($this->voltage, $this->isNailed))->getCry(),
            default => throw new Exception('Should be unreachable'),
        };
    }

    private function getBaseSpeed(): float
    {
        return 12.0;
    }
}
