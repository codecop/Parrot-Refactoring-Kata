import AfricanParrot from "../src/AfricanParrot";

describe('AfricanParrot', () => {

    it('should be instance of African Parrot.', () => {
        const africanParrot = new AfricanParrot(0);
        expect(africanParrot).toBeInstanceOf(AfricanParrot);
    });

    it('gets speed of African Parrot with one coconut', () => {
        const africanParrot = new AfricanParrot(1);
        expect(africanParrot.getSpeed()).toBe(3);
    });

    it('gets speed of African Parrot with two coconuts', () => {
        const africanParrot = new AfricanParrot(2);
        expect(africanParrot.getSpeed()).toBe(0);
    });

    it('gets speed of African Parrot with no coconuts', () => {
        const africanParrot = new AfricanParrot(0);
        expect(africanParrot.getSpeed()).toBe(12);
    });
});
