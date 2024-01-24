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


class Parrot
{
    public function __construct(
        /**
         * @var int ParrotTypeEnum
         */
        private int $type,
        private int $numberOfCoconuts,
        private float $voltage,
        private bool $isNailed
    ) {

    }

    /**
     * @throws Exception
     */
    public function getSpeed(): float
    {
        return match ($this->type) {
            ParrotTypeEnum::EUROPEAN => (new EuropeanStrategy())->getSpeed($this->getBaseSpeed()),
            ParrotTypeEnum::AFRICAN => (new AfricanStrategy($this->numberOfCoconuts))->getSpeed($this->getBaseSpeed()),
            ParrotTypeEnum::NORWEGIAN_BLUE => $this->isNailed ? 0 : $this->getBaseSpeedWith($this->voltage),
            default => throw new Exception('Should be unreachable'),
        };
    }

    /**
     * @throws Exception
     */
    public function getCry(): string
    {
        return match ($this->type) {
            ParrotTypeEnum::EUROPEAN => (new EuropeanStrategy())->getCry(),
            ParrotTypeEnum::AFRICAN => (new AfricanStrategy($this->numberOfCoconuts))->getCry(),
            ParrotTypeEnum::NORWEGIAN_BLUE => $this->voltage > 0 ? 'Bzzzzzz' : '...',
            default => throw new Exception('Should be unreachable'),
        };
    }

    private function getBaseSpeedWith(float $voltage): float
    {
        return min(24.0, $voltage * $this->getBaseSpeed());
    }

    private function getBaseSpeed(): float
    {
        return 12.0;
    }
}
