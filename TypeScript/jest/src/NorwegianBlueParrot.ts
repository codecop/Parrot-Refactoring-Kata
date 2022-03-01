import {AbstractParrot} from "./AbstractParrot";
import INotMovableParrot from "./INotMovableParrot";

export default class NorwegianBlueParrot extends AbstractParrot implements INotMovableParrot{
    private minSpeedWithVoltage: number = 24;

    minSpeed: number = 0;

    isNailed: boolean;

    voltage: number;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.isNailed = isNailed;
        this.voltage = voltage;
    }

    getSpeed(): number {
        if(this.isNailed) {
            return this.minSpeed;
        }
        return this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(this.minSpeedWithVoltage, voltage * this.baseSpeed);
    }
}