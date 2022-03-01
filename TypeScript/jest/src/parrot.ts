export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export abstract class Parrot {
    private parrotType: ParrotTypes;
    protected readonly numberOfCoconuts: number;
    protected readonly voltage: number;
    protected readonly isNailed: boolean;

    protected constructor(parrotType: ParrotTypes, numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        this.parrotType = parrotType;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public abstract getSpeed(): number

    protected getBaseSpeed(): number {
        return 12;
    }

    protected getBaseSpeedWithVoltage(voltage: number): number {
        return Math.min(24, voltage * this.getBaseSpeed());
    }
}
