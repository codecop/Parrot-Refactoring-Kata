import AbstractParrot from '../abstract-parrot';

export class AfricanParrot extends AbstractParrot {

    private readonly LOAD_FACTOR = 9;

    private readonly numberOfCoconuts: number;

    constructor(numberOfCoconuts: number) {
        super();
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed(): number {
        return  Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
    }

    private getLoadFactor(): number {
        return this.LOAD_FACTOR;
    }
}
