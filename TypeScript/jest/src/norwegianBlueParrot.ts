import {Parrot, ParrotTypes} from './parrot';

class NorwegianBlueParrot extends Parrot {
    constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        super(ParrotTypes.NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed);
    }

    getSpeed(): number {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    private getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }
}

export default NorwegianBlueParrot;
