<?php

declare(strict_types=1);

namespace Parrot\Tests;

use Exception;
use Parrot\Parrot;
use Parrot\EuropeanStrategy;
use Parrot\AfricanStrategy;
use Parrot\NorwegianStrategy;
use Parrot\ParrotTypeEnum;
use PHPUnit\Framework\TestCase;

class ParrotTest extends TestCase
{
    public function testSpeedOfEuropeanParrot(): void
    {
        $parrot = new Parrot(new EuropeanStrategy());
        self::assertSame(12.0, $parrot->getSpeed());
    }

    public function testSpeedOfAfricanParrotWithOneCoconut(): void
    {
        $parrot = new Parrot(new AfricanStrategy(1));
        self::assertSame(3.0, $parrot->getSpeed());
    }

    public function testSpeedOfAfricanParrotWithTwoCoconuts(): void
    {
        $parrot = new Parrot(new AfricanStrategy(2));
        self::assertSame(0.0, $parrot->getSpeed());
    }

    public function testSpeedOfAfricanParrotWithNoCoconuts(): void
    {
        $parrot = new Parrot(new AfricanStrategy(0));
        self::assertSame(12.0, $parrot->getSpeed());
    }

    public function testSpeedNorwegianBlueParrotNailed(): void
    {
        $parrot = new Parrot(new NorwegianStrategy(1.5, true));
        self::assertSame(0.0, $parrot->getSpeed());
    }

    public function testSpeedNorwegianBlueParrotNotNailed(): void
    {
        $parrot = new Parrot(new NorwegianStrategy(1.5, false));
        self::assertSame(18.0, $parrot->getSpeed());
    }

    public function testSpeedNorwegianBlueParrotNotNailedHighVoltage(): void
    {
        $parrot = new Parrot(new NorwegianStrategy(4, false));
        self::assertSame(24.0, $parrot->getSpeed());
    }

    public function testAnUnknownParrotWillWillThrownAnException(): void
    {
        $this->expectExceptionMessage('Parrot\Parrot::__construct(): Argument #1 ($strategy) must be of type Parrot\ParrotStrategy, null given');
        $unknownParrot = new Parrot(null);
        $unknownParrot->getSpeed();
    }

    public function testGetCryOfEuropeanParrot(): void
    {
        $parrot = new Parrot(new EuropeanStrategy());
        self::assertSame('Sqoork!', $parrot->getCry());
    }

    public function testGetCryOfAfricanParrot(): void
    {
        $parrot = new Parrot(new AfricanStrategy(1));
        self::assertSame('Sqaark!', $parrot->getCry());
    }

    public function testGetCryOfNorwegianBlueHighVoltage(): void
    {
        $parrot = new Parrot(new NorwegianStrategy(4, false));
        self::assertSame('Bzzzzzz', $parrot->getCry());
    }

    public function testGetCryOfNorwegianBlueNoVoltage(): void
    {
        $parrot = new Parrot(new NorwegianStrategy(0, false));
        self::assertSame('...', $parrot->getCry());
    }
}
