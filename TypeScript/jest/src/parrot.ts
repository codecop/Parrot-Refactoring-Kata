export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export const BASE_SPEED = 12;

const LOAD_FACTOR = 9;

export class Parrot {
    constructor(private parrotType: ParrotTypes,
                private numberOfCoconuts: number,
                private voltage: number,
                private isNailed: boolean) {
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
        return BASE_SPEED;
    }

    private getLoadFactor(): number {
        return LOAD_FACTOR;
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

}
