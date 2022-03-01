import { BASE_SPEED, Parrot, ParrotTypes } from './parrot';

const LOAD_FACTOR = 9;

export class AfricanParrot extends Parrot {
    constructor(private numberOfCoconuts: number) {
        super(ParrotTypes.AFRICAN, 0, false);
    }

    public getSpeed(): number {
        return Math.max(0, BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
    }
}
