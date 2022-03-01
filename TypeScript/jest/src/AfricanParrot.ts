import { Parrot} from './parrot';

const LOAD_FACTOR = 9;

export class AfricanParrot extends Parrot {
    constructor(private numberOfCoconuts: number) {
        super();
    }

    public getSpeed(): number {
        return Math.max(0, Parrot.BASE_SPEED - LOAD_FACTOR * this.numberOfCoconuts);
    }
}
