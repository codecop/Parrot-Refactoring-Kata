import { Parrot} from './parrot';
import { EuropeanParrot } from './EuropeanParrot';
import { AfricanParrot } from './AfricanParrot';
import { NorwegianBlueParrot } from './NorwegianBlueParrot';

export class ParrotFactory {
    public createEuropeanParrot(): Parrot {
        return new EuropeanParrot();
    }

    public createAfricanParrot(numberOfCoconuts: number): Parrot {
        return new AfricanParrot(numberOfCoconuts);
    }

    public createNorwegianParrot(voltage: number, isNailed: boolean): Parrot {
        return new NorwegianBlueParrot(voltage, isNailed);
    }

    public createNailedNorwegianParrot(voltage: number): Parrot {
        return new NorwegianBlueParrot(voltage, true);
    }

    public createFreeNorwegianParrot(voltage: number): Parrot {
        return new NorwegianBlueParrot(voltage, false);
    }
}