import { IParrot } from './IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

const LOAD_FACTOR = 9;

export class AfricanParrot implements IParrot {
    constructor(private numberOfCoconuts: number) {
    }

    public getSpeed(): number {
        const weightSpeedPenalty = LOAD_FACTOR * this.numberOfCoconuts;
        return Math.max(0, PARROT_BASE_SPEED - weightSpeedPenalty);
    }
}
