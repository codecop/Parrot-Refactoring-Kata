export abstract class AbstractParrot {
    private readonly _baseSpeed: number = 12;

    abstract getSpeed(): number;

    get baseSpeed(): number {
        return this._baseSpeed;
    };
}