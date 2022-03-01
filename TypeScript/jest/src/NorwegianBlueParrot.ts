import { BASE_SPEED, Parrot} from './parrot';

export class NorwegianBlueParrot extends Parrot {
    constructor(private voltage: number,
                private isNailed: boolean,
    ) {
        super();
    }

    public getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * BASE_SPEED);
    }
}