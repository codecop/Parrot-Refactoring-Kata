export abstract class AbstractParrot {
    numberOfCoconuts: number;
    private readonly voltage: number;
    private readonly isNailed: boolean;

    private baseSpeed: number = 12;

    protected constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    abstract getSpeed(): number;

    getBaseSpeed(): number {
        return this.baseSpeed;
    };
}