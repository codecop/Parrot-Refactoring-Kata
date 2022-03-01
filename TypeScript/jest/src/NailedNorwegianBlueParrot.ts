import { Parrot } from './parrot';
import { IParrot } from './IParrot';

export class NailedNorwegianBlueParrot extends Parrot implements IParrot {
    public getSpeed() {
        return 0;
    }
}