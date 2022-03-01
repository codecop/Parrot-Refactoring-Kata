import {AbstractParrot} from "./AbstractParrot";
import ISleepableParrot from "./ISleepableParrot";

export default class AfricanParrot extends AbstractParrot implements ISleepableParrot {
    private loadFactor: number = 9;

    minSpeed: number = 0;

    numberOfCoconuts: number;

    constructor(numberOfCoconuts: number) {
        super();
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed(): number {
        return Math.max(this.minSpeed, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}