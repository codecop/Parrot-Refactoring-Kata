export abstract class AbstractParrot {
    private readonly _numberOfCoconuts: number;
    private readonly _voltage: number;
    private readonly _isNailed: boolean;
    private readonly _baseSpeed: number = 12;

    protected constructor(numberOfCoconuts: number, voltage: number, isNailed: boolean) {
        this._numberOfCoconuts = numberOfCoconuts;
        this._voltage = voltage;
        this._isNailed = isNailed;
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

    get isNailed(): boolean {
        return this._isNailed;
    }
}