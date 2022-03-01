import {AbstractParrot} from "./AbstractParrot";

export default class EuropeanParrot extends AbstractParrot {
    constructor(numberOfCoconuts: number) {
        super(numberOfCoconuts);
    }

    getSpeed(): number {
        return this.baseSpeed;
    }
}