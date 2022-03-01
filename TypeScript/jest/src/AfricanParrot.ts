import {AbstractParrot} from "./AbstractParrot";

export default class AfricanParrot extends AbstractParrot {
    private loadFactor: number = 9;
    private minSpeed: number = 0;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return Math.max(this.minSpeed, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}