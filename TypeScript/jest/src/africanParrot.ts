import {Parrot, ParrotTypes} from './parrot';

class AfricanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.AFRICAN, numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }
}

export default AfricanParrot;
