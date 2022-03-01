import {AbstractParrot} from "./AbstractParrot";

export default class NorwegianBlueParrot extends AbstractParrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return 0;
    }
}