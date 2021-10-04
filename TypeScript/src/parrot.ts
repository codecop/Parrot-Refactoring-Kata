export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export class Parrot {
    constructor(
        private parrotType: ParrotTypes,
        private numberOfCoconuts: number,
        private voltage: number,
        private isNailed: boolean,
    ) {
    }

    public getSpeed(): number {
        switch (this.parrotType) {
            case ParrotTypes.EUROPEAN:
                return this.getBaseSpeed();
            case ParrotTypes.AFRICAN:
                return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
            case ParrotTypes.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    private getBaseSpeed(): number {
        return 12;
    }

    private getLoadFactor(): number {
        return 9;
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

}

class EuropeanParrot extends Parrot {
    constructor(
        numberOfCoconuts: number,
        voltage: number,
        isNailed: boolean,
    ) {
        super(ParrotTypes.EUROPEAN, numberOfCoconuts, voltage, isNailed);
    }
}

export function createParrot(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    nailed: boolean,
) {
    return new Parrot(parrotType, numberOfCoconuts, voltage, nailed);
}
