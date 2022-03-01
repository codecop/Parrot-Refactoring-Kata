import { IParrot } from './IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

export class FreeNorwegianBlueParrot implements IParrot {
    private static readonly minimumSpeed = 24;

    constructor(private voltage: number) {
    }

    public getSpeed(): number {
        return Math.min(FreeNorwegianBlueParrot.minimumSpeed, this.voltage * PARROT_BASE_SPEED);
    }
}