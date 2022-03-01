export enum ParrotTypes {
    EUROPEAN,
    AFRICAN,
    NORWEGIAN_BLUE,
}

export const BASE_SPEED = 12;

export abstract class Parrot {
    constructor(private parrotType: ParrotTypes) {
    }

    public abstract getSpeed(): number;
}
