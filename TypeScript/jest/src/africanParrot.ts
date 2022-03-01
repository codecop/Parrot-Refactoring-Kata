import {Parrot, ParrotTypes} from './parrot';

class AfricanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.AFRICAN, numberOfCoconuts, voltage, isNailed);
    }
}

export default AfricanParrot;
