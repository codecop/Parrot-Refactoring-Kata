import {AbstractParrot} from "./AbstractParrot";

export default class NorwegianBlueParrot extends AbstractParrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return (this.isNailed) ? 0 : Math.min(24, this.voltage * this.baseSpeed);
    }
}