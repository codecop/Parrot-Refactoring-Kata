export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export abstract class Parrot {
    constructor(
        protected parrotType: ParrotTypes,
    ) {
    }

    public abstract getSpeed(): number;

    protected getBaseSpeed(): number {
        return 12;
    }

    protected getLoadFactor(): number {
        return 9;
    }
}

class EuropeanParrot extends Parrot {
    constructor(
    ) {
        super(ParrotTypes.EUROPEAN);
    }

    public getSpeed(): number {
        return this.getBaseSpeed();
    }
}

class AfricanParrot extends Parrot {
    constructor(
        private numberOfCoconuts: number,
    ) {
        super(ParrotTypes.AFRICAN);
    }

    public getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }
}

class NorvegianBlueParrot extends Parrot {
    constructor(
        private voltage: number,
        private isNailed: boolean,
    ) {
        super(ParrotTypes.NORWEGIAN_BLUE);
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }
}

export function createParrot(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    nailed: boolean,
) {
    if (parrotType === ParrotTypes.EUROPEAN) {
        return new EuropeanParrot();
    } else if (parrotType === ParrotTypes.AFRICAN) {
        return new AfricanParrot(numberOfCoconuts);
    } else if (parrotType === ParrotTypes.NORWEGIAN_BLUE) {
        return new NorvegianBlueParrot(voltage, nailed);
    }
    throw new Error("Should be unreachable");
}
