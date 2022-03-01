import { Parrot, ParrotTypes } from './parrot';

export class ParrotFactory {
    public createEuropeanParrot(): Parrot {
        return new Parrot(ParrotTypes.EUROPEAN, 0, 0, false);
    }

    public createAfricanParrot(numberOfCoconuts: number): Parrot {
        return new Parrot(ParrotTypes.AFRICAN, numberOfCoconuts, 0, false);
    }

    public createNorwegianParrot(voltage: number, isNailed: boolean): Parrot {
        return new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, voltage, isNailed);
    }
}