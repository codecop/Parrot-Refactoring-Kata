import {Parrot} from './parrot';

class EuropeanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return super.getBaseSpeed();
    }
}

export default EuropeanParrot;
