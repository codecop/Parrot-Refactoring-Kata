import { IParrot } from '../IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

export class FreeNorwegianBlueParrot implements IParrot {
    constructor(private voltage: number) {
    }

    public getSpeed(): number {
        return Math.min(24, this.voltage * PARROT_BASE_SPEED);
    }
}