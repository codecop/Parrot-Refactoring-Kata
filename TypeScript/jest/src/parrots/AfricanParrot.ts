import { IParrot } from './IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

const LOAD_FACTOR = 9;

export class AfricanParrot implements IParrot {
    private static readonly minimumSpeed = 0;

    constructor(private numberOfCoconuts: number) {
    }

    public getSpeed(): number {
        const weightSpeedPenalty = LOAD_FACTOR * this.numberOfCoconuts;
        return Math.max(AfricanParrot.minimumSpeed, PARROT_BASE_SPEED - weightSpeedPenalty);
    }
}
