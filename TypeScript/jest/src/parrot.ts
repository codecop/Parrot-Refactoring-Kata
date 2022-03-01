export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

const BASE_SPEED = 12;
const LOAD_FACTOR = 9;
const MIN_SPEED_WITH_VOLTAGE = 24;

export class Parrot {
    private readonly parrotType: ParrotTypes;
    private readonly numberOfCoconuts: number;
    private readonly voltage: number;
    private readonly isNailed: boolean;

    constructor(parrotType: ParrotTypes, numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        this.parrotType = parrotType;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public getSpeed(): number {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return this.getBaseSpeed();
            case ParrotTypes.AFRICAN:
                return this.getAfricanSpeed();
            case ParrotTypes.NORWEGIAN_BLUE:
                return this.getNorwegianBlueSpeed();
        }
        throw new Error("Should be unreachable");
    }

    private getAfricanSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

    private getNorwegianBlueSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeed(): number {
        return BASE_SPEED;
    }

    private getLoadFactor(): number {
        return LOAD_FACTOR;
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(MIN_SPEED_WITH_VOLTAGE, voltage * this.getBaseSpeed());
    }
}
