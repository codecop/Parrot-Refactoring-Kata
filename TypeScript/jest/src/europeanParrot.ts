import {Parrot} from './parrot';

class EuropeanParrot extends Parrot {
    constructor() {
        super();
    }

    getSpeed(): number {
        return super.getBaseSpeed();
    }
}

export default EuropeanParrot;
