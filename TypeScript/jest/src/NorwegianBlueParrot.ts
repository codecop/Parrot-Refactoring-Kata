import {AbstractParrot} from "./AbstractParrot";

export default class NorwegianBlueParrot extends AbstractParrot {
    private minSpeedWithVoltage: number = 24;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        if(this.isNailed) {
            return 0
        }
        return this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(this.minSpeedWithVoltage, voltage * this.baseSpeed);
    }
}