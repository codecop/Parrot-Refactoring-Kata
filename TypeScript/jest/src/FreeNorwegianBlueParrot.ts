import { Parrot } from './parrot';
import { IParrot } from './IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

export class FreeNorwegianBlueParrot extends Parrot implements IParrot {
    constructor(private voltage: number) {
        super();
    }

    public getSpeed(): number {
        return Math.min(24, this.voltage * PARROT_BASE_SPEED);
    }
}