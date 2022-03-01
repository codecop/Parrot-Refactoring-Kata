import AbstractParrot from '../abstract-parrot';

export default class NorwegianBlueParrot extends AbstractParrot{

    private voltage: number;
    private isNailed: boolean;

    constructor(voltage: number, isNailed: boolean) {
        super();
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed(): number {
        return 0;
    }
}
