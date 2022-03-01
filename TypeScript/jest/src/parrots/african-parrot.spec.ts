import {AfricanParrot} from './african-parrot';

describe('African Parrot', () => {
    it('gets speed of African Parrot with one coconut', () => {
        const parrot = new AfricanParrot(1);
        expect(parrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const parrot = new AfricanParrot(2);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const parrot = new AfricanParrot(0);
        expect(parrot.getSpeed()).toBe(12);
    });
});
