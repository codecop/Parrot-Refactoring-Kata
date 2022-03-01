import { Parrot } from './parrot';

export class FreeNorwegianBlueParrot extends Parrot {
    constructor(private voltage: number) {
        super();
    }

    public getSpeed(): number {
        return Math.min(24, this.voltage * Parrot.BASE_SPEED);
    }
}