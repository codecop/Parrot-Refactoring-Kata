import { Parrot, ParrotTypes } from './parrot';
import { EuropeanParrot } from './EuropeanParrot';
import { AfricanParrot } from './AfricanParrot';

export class ParrotFactory {
    public createEuropeanParrot(): Parrot {
        return new EuropeanParrot();
    }

    public createAfricanParrot(numberOfCoconuts: number): Parrot {
        return new AfricanParrot(numberOfCoconuts);
    }

    public createNorwegianParrot(voltage: number, isNailed: boolean): Parrot {
        return new Parrot(ParrotTypes.NORWEGIAN_BLUE, 0, voltage, isNailed);
    }
}