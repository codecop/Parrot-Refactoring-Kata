import { Parrot, ParrotTypes } from './parrot';

export class EuropeanParrot extends Parrot {
    constructor() {
        super(ParrotTypes.EUROPEAN, 0, 0, false);
    }
}