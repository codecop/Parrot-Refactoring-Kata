import { Parrot} from './parrot';
import { EuropeanParrot } from './EuropeanParrot';
import { AfricanParrot } from './AfricanParrot';
import { NailedNorwegianBlueParrot } from './NailedNorwegianBlueParrot';
import { FreeNorwegianBlueParrot } from './FreeNorwegianBlueParrot';
import { IParrot } from './IParrot';

export class ParrotFactory {
    public createEuropeanParrot(): IParrot {
        return new EuropeanParrot();
    }

    public createAfricanParrot(numberOfCoconuts: number): IParrot {
        return new AfricanParrot(numberOfCoconuts);
    }

    public createNailedNorwegianParrot(): IParrot {
        return new NailedNorwegianBlueParrot();
    }

    public createFreeNorwegianParrot(voltage: number): Parrot {
        return new FreeNorwegianBlueParrot(voltage);
    }
}