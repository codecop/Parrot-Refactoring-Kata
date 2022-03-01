export abstract class Parrot {
    protected readonly numberOfCoconuts: number;
    protected readonly voltage: number;
    protected readonly isNailed: boolean;

    protected constructor( numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public abstract getSpeed(): number

    protected getBaseSpeed(): number {
        return 12;
    }
}
