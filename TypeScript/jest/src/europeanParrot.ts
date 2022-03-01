import {Parrot, ParrotTypes} from './parrot';

class EuropeanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.EUROPEAN, numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return super.getBaseSpeed();
    }
}

export default EuropeanParrot;
