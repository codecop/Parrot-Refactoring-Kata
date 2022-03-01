import {Parrot} from './parrot';

class AfricanParrot extends Parrot {
    private readonly numberOfCoconuts: number;
    constructor(numberOfCoconuts: number) {
        super();
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed(): number {
        return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

    private getLoadFactor(): number {
        return 9;
    }
}

export default AfricanParrot;
