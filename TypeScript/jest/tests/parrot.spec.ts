import {Parrot } from '../src/parrot'
import { ParrotFactory } from '../src/parrotFactory';

describe('Parrot', () => {

    const parrotFactory = new ParrotFactory();

    describe('European', () => {
        it('gets speed of European Parrot', () => {
            const parrot = parrotFactory.createEuropeanParrot();
            expect(parrot.getSpeed()).toBe(12);
        });
    });

    describe('African', () => {
        it('gets speed of African Parrot with one coconut', () => {
            const parrot = parrotFactory.createAfricanParrot(1);
            expect(parrot.getSpeed()).toBe(3);
        });

        it('gets speed of African Parrot with two coconuts', () => {
            const parrot = parrotFactory.createAfricanParrot(2);
            expect(parrot.getSpeed()).toBe(0);
        });

        it('gets speed of African Parrot with no coconuts', () => {
            const parrot = parrotFactory.createAfricanParrot(0);
            expect(parrot.getSpeed()).toBe(12);
        });
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const parrot = parrotFactory.createNorwegianParrot(1.5, true);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const parrot = parrotFactory.createNorwegianParrot(1.5, false);
        expect(parrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const parrot = parrotFactory.createNorwegianParrot(4, false);
        expect(parrot.getSpeed()).toBe(24);
    });

});
