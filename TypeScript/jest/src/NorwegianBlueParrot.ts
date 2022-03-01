import {AbstractParrot} from "./AbstractParrot";
import ISleepableParrot from "./ISleepableParrot";

export default class NorwegianBlueParrot extends AbstractParrot implements ISleepableParrot{
    private minSpeedWithVoltage: number = 24;
    minSpeed: number = 0;

    isNailedValue: boolean;

    voltageNumber: number = 0;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
        this.isNailedValue = isNailed;
        this.voltageNumber = voltage;
    }

    getSpeed(): number {
        if(this.isNailedValue) {
            return this.minSpeed;
        }
        return this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(this.minSpeedWithVoltage, voltage * this.baseSpeed);
    }
}