import { Parrot} from './parrot';
import { IParrot } from './IParrot';

export class EuropeanParrot extends Parrot implements IParrot {
    constructor() {
        super();
    }

    public getSpeed(): number {
        return Parrot.BASE_SPEED;
    }
}