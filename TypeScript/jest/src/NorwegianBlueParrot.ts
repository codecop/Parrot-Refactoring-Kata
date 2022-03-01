import {AbstractParrot} from "./AbstractParrot";
import ISleepableParrot from "./ISleepableParrot";

export default class NorwegianBlueParrot extends AbstractParrot implements ISleepableParrot{
    private minSpeedWithVoltage: number = 24;
    minSpeed: number = 0;

    isNailed: boolean;

    voltageNumber: number;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.isNailed = isNailed;
        this.voltageNumber = voltage;
    }

    getSpeed(): number {
        if(this.isNailed) {
            return this.minSpeed;
        }
        return this.getBaseSpeedWithVoltage(this.voltageNumber);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(this.minSpeedWithVoltage, voltage * this.baseSpeed);
    }
}