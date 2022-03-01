import { BASE_SPEED, Parrot} from './parrot';

export class EuropeanParrot extends Parrot {
    constructor() {
        super();
    }

    public getSpeed(): number {
        return BASE_SPEED;
    }
}