import AbstractParrot from '../abstract-parrot';

export default class NorwegianBlueParrot extends AbstractParrot{

    private readonly MAX_SPEED = 24;

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
        return Math.min(this.MAX_SPEED, voltage * this.getBaseSpeed());
    }
}
