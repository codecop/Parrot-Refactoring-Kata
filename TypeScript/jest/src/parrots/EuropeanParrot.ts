import { IParrot } from '../IParrot';
import { PARROT_BASE_SPEED } from '../ParrotBaseSpeed';

export class EuropeanParrot implements IParrot {
    public getSpeed(): number {
        return PARROT_BASE_SPEED;
    }
}