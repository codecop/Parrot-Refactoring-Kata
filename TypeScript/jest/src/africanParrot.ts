import {Parrot} from './parrot';

class AfricanParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

    private getLoadFactor(): number {
        return 9;
    }
}

export default AfricanParrot;
