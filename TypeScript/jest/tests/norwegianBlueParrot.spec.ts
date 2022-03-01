import {Parrot, ParrotTypes} from '../src/parrot';
import NorwegianBlueParrot from '../src/norwegianBlueParrot';

describe('NorwegianBlueParrot', () => {
    it('should have correct speed if it is nailed', () => {
        const parrot = new NorwegianBlueParrot( 0, 1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('should have correct speed if it is not nailed', () => {
        const parrot = new NorwegianBlueParrot( 0, 1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('should have correct speed if it is not nailed and has high voltage', () => {
        const parrot = new NorwegianBlueParrot( 0, 4, false);
        expect(parrot.getSpeed()).toBe(24);
    });
})
