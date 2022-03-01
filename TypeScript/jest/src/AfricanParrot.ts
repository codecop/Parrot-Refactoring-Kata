import {AbstractParrot} from "./AbstractParrot";

export default class AfricanParrot extends AbstractParrot {
    private loadFactor: number = 9;

    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.loadFactor * this.numberOfCoconuts);
    }
}