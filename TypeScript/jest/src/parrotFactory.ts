import { EuropeanParrot } from './parrots/EuropeanParrot';
import { AfricanParrot } from './parrots/AfricanParrot';
import { NailedNorwegianBlueParrot } from './parrots/NailedNorwegianBlueParrot';
import { FreeNorwegianBlueParrot } from './parrots/FreeNorwegianBlueParrot';
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

    public createFreeNorwegianParrot(voltage: number): IParrot {
        return new FreeNorwegianBlueParrot(voltage);
    }
}