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
            case ParrotTypes.AFRICAN:
                return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
            case ParrotTypes.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * BASE_SPEED);
    }

}
