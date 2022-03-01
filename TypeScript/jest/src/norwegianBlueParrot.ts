import {Parrot} from './parrot';

class NorwegianBlueParrot extends Parrot {
    static readonly MAX_SPEED = 24;

    private readonly voltage: number;
    private readonly isNailed: boolean;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(): number {
        return this.isNailed ? 0 : this.getBoundedSpeed();
    }

    private getBoundedSpeed(): number {
        return Math.min(NorwegianBlueParrot.MAX_SPEED, this.getUnboundedSpeed());
    }

    private getUnboundedSpeed(): number {
        return this.voltage * this.getBaseSpeed();
    }
}

export default NorwegianBlueParrot;
