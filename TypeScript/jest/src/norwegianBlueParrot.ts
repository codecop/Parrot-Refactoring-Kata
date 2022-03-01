import {Parrot, ParrotTypes} from './parrot';

class NorwegianBlueParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed);
    }
}

export default NorwegianBlueParrot;
