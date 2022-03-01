import { Parrot} from './parrot';

export class EuropeanParrot extends Parrot {
    constructor() {
        super();
    }

    public getSpeed(): number {
        return Parrot.BASE_SPEED;
    }
}