import { Parrot, ParrotTypes } from './parrot';

export class ParrotFactory {
    public createEuropeanParrot() {
        return new Parrot(ParrotTypes.EUROPEAN, 0, 0, false);
    }
}