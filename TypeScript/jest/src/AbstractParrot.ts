export abstract class AbstractParrot {
    private readonly _numberOfCoconuts: number;
    private readonly _voltage: number;
    private readonly _baseSpeed: number = 12;

    protected constructor(numberOfCoconuts: number, voltage: number) {
        this._numberOfCoconuts = numberOfCoconuts;
        this._voltage = voltage;
    }

    abstract getSpeed(): number;

    get baseSpeed(): number {
        return this._baseSpeed;
    };

    get numberOfCoconuts(): number {
        return this._numberOfCoconuts;
    }

    get voltage(): number {
        return this._voltage;
    }
}