import {AbstractParrot} from "./AbstractParrot";
import ISleepableParrot from "./ISleepableParrot";

export default class AfricanParrot extends AbstractParrot implements ISleepableParrot {
    private loadFactor: number = 9;
    minSpeed: number = 0;

    private countOfCoconuts: number;

    private voltageNumber: number;

    private isNailedValue: boolean;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);

        this.countOfCoconuts = numberOfCoconuts;

        this.voltageNumber = voltage;

        this.isNailedValue = isNailed;
    }

    getSpeed(): number {
        return Math.max(this.minSpeed, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}