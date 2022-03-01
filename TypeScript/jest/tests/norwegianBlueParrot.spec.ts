import {Parrot, ParrotTypes} from '../src/parrot';
import NorwegianBlueParrot from '../src/norwegianBlueParrot';

describe('NorwegianBlueParrot', () => {
    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = new NorwegianBlueParrot( 0, 1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const parrot = new NorwegianBlueParrot( 0, 1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const parrot = new NorwegianBlueParrot( 0, 4, false);
        expect(parrot.getSpeed()).toBe(24);
    });

})
