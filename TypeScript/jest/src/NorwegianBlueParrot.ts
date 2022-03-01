import { Parrot, ParrotTypes } from './parrot';

export class NorwegianBlueParrot extends Parrot {
    constructor(voltage: number, isNailed: boolean) {
        super(ParrotTypes.NORWEGIAN_BLUE, voltage, isNailed);
    }
}