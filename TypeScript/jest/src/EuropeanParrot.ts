import {AbstractParrot} from "./AbstractParrot";

export default class EuropeanParrot extends AbstractParrot {
    constructor() {
        super();
    }

    getSpeed(): number {
        return this.baseSpeed;
    }
}