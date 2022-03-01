export abstract class AbstractParrot {
    private readonly _numberOfCoconuts: number;
    private readonly _baseSpeed: number = 12;

    protected constructor(numberOfCoconuts: number) {
        this._numberOfCoconuts = numberOfCoconuts;
    }

    abstract getSpeed(): number;

    get baseSpeed(): number {
        return this._baseSpeed;
    };

    get numberOfCoconuts(): number {
        return this._numberOfCoconuts;
    }
}