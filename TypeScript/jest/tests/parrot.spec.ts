import EuropeanParrot from '../src/parrots/european-parrot';
import {AfricanParrot} from '../src/parrots/african-parrot';
import NorwegianBlueParrot from '../src/parrots/norwegian-blue-parrot';

describe('Parrot', () => {

    it('gets speed of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect(parrot.getSpeed()).toBe(12);
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = new NorwegianBlueParrot(  1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const parrot = new NorwegianBlueParrot( 1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const parrot = new NorwegianBlueParrot(  4, false);
        expect(parrot.getSpeed()).toBe(24);
    });

});
