import AbstractParrot from '../abstract-parrot';

export class AfricanParrot extends AbstractParrot {
    getSpeed(): number {
        return 0;
    }

    private getLoadFactor(): number {
        return 9;
    }
}
