import AfricanParrot from '../src/africanParrot';


describe('AfricanParrot', () => {
    it('should have correct speed with 1 coconut', () => {
        const parrot = new AfricanParrot(1, 0, false);
        expect(parrot.getSpeed()).toBe(3);
    });

    it('should have correct speed with 2 coconuts', () => {
        const parrot = new AfricanParrot( 2, 0, false);
        expect(parrot.getSpeed()).toBe(0);
    });

    it('should have correct speed with 0 coconuts', () => {
        const parrot = new AfricanParrot( 0, 0, false);
        expect(parrot.getSpeed()).toBe(12);
    });
})
