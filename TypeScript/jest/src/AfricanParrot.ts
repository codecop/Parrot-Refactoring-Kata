import {AbstractParrot} from "./AbstractParrot";
import ISleepableParrot from "./ISleepableParrot";

export default class AfricanParrot extends AbstractParrot implements ISleepableParrot {
    private loadFactor: number = 9;

    minSpeed: number = 0;

    countOfCoconuts: number;

    constructor(numberOfCoconuts: number) {
        super(numberOfCoconuts);
        this.countOfCoconuts = numberOfCoconuts;
    }

    getSpeed(): number {
        return Math.max(this.minSpeed, this.baseSpeed - this.loadFactor * this.countOfCoconuts);
    }
}