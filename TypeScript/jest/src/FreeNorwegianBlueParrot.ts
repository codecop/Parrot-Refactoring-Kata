import { Parrot } from './parrot';
import { IParrot } from './IParrot';

export class FreeNorwegianBlueParrot extends Parrot implements IParrot {
    constructor(private voltage: number) {
        super();
    }

    public getSpeed(): number {
        return Math.min(24, this.voltage * Parrot.BASE_SPEED);
    }
}