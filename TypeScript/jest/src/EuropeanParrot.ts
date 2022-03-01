import { BASE_SPEED, Parrot, ParrotTypes } from './parrot';

export class EuropeanParrot extends Parrot {
    constructor() {
        super(ParrotTypes.EUROPEAN, 0, false);
    }

    public getSpeed(): number {
        return BASE_SPEED;
    }
}