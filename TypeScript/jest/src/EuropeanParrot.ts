import { Parrot} from './parrot';
import { IParrot } from './IParrot';
import { PARROT_BASE_SPEED } from './ParrotBaseSpeed';

export class EuropeanParrot extends Parrot implements IParrot {
    constructor() {
        super();
    }

    public getSpeed(): number {
        return PARROT_BASE_SPEED;
    }
}