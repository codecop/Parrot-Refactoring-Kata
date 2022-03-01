import {Parrot} from './parrot';

class EuropeanParrot extends Parrot {
    getSpeed(): number {
        return super.getBaseSpeed();
    }
}

export default EuropeanParrot;
