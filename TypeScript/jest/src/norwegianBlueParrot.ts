import {Parrot} from './parrot';

class NorwegianBlueParrot extends Parrot {
    private readonly voltage: number;
    private readonly isNailed: boolean;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }
}

export default NorwegianBlueParrot;
