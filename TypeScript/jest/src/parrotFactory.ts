import { Parrot, ParrotTypes } from './parrot';

export class ParrotFactory {
    public createEuropeanParrot() {
        return new Parrot(ParrotTypes.EUROPEAN, 0, 0, false);
    }

    public createAfricanParrot(numberOfCoconuts: number) {
        return new Parrot(ParrotTypes.AFRICAN, numberOfCoconuts, 0, false);
    }

    public createNorwegianParrot(voltage: number, isNailed: boolean) {
        return new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, voltage, isNailed);
    }
}