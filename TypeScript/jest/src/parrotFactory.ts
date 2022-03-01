import { Parrot} from './parrot';
import { EuropeanParrot } from './EuropeanParrot';
import { AfricanParrot } from './AfricanParrot';
import { NailedNorwegianBlueParrot } from './NailedNorwegianBlueParrot';
import { FreeNorwegianBlueParrot } from './FreeNorwegianBlueParrot';

export class ParrotFactory {
    public createEuropeanParrot(): Parrot {
        return new EuropeanParrot();
    }

    public createAfricanParrot(numberOfCoconuts: number): Parrot {
        return new AfricanParrot(numberOfCoconuts);
    }

    public createNailedNorwegianParrot(): Parrot {
        return new NailedNorwegianBlueParrot();
    }

    public createFreeNorwegianParrot(voltage: number): Parrot {
        return new FreeNorwegianBlueParrot(voltage);
    }
}