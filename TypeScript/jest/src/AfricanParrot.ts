import { Parrot, ParrotTypes } from './parrot';

export class AfricanParrot extends Parrot {
    constructor(numberOfCoconuts: number) {
        super(ParrotTypes.AFRICAN, numberOfCoconuts, 0, false);
    }
}
