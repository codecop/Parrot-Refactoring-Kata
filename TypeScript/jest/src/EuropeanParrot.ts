import {AbstractParrot} from "./AbstractParrot";

export default class EuropeanParrot extends AbstractParrot {
    constructor(numberOfCoconuts: number, voltage: number) {
        super(numberOfCoconuts, voltage);
    }

    getSpeed(): number {
        return this.baseSpeed;
    }
}