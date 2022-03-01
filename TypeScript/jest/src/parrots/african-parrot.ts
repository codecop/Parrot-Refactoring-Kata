import AbstractParrot from '../abstract-parrot';

export class AfricanParrot extends AbstractParrot {

    private numberOfCoconuts: number;

    constructor(numberOfCoconuts: number) {
        super();
        this.numberOfCoconuts = numberOfCoconuts;
    }

    getSpeed(): number {
        return 0;
    }

    private getLoadFactor(): number {
        return 9;
    }
}
