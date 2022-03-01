import { Parrot} from './parrot';
import { IParrot } from './IParrot';

const LOAD_FACTOR = 9;

export class AfricanParrot extends Parrot implements IParrot {
    constructor(private numberOfCoconuts: number) {
        super();
    }

    public getSpeed(): number {
        const weightSpeedPenalty = LOAD_FACTOR * this.numberOfCoconuts;
        return Math.max(0, Parrot.BASE_SPEED - weightSpeedPenalty);
    }
}
