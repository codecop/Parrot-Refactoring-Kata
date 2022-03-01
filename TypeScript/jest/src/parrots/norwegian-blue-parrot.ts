import AbstractParrot from '../abstract-parrot';

export default class NorwegianBlueParrot extends AbstractParrot{

    private readonly NAILED_SPEED = 0;

    private readonly MAX_SPEED = 24;

    private readonly voltage: number;

    private readonly isNailed: boolean;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(): number {
        return (this.isNailed) ? this.NAILED_SPEED : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(this.MAX_SPEED, this.getSpeedUnderVoltage(voltage));
    }

    private getSpeedUnderVoltage(voltage: number) {
        return voltage * this.getBaseSpeed();
    }
}
