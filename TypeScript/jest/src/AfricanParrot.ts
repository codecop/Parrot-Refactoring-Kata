import { Parrot} from './parrot';

const LOAD_FACTOR = 9;

export class AfricanParrot extends Parrot {
    constructor(private numberOfCoconuts: number) {
        super();
    }

    public getSpeed(): number {
        const weightSpeedPenalty = LOAD_FACTOR * this.numberOfCoconuts;
        return Math.max(0, Parrot.BASE_SPEED - weightSpeedPenalty);
    }
}
