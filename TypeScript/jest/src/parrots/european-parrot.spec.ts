import EuropeanParrot from './european-parrot';

describe('European parrot', () => {
    it('gets speed of European Parrot', () => {
        const parrot = new EuropeanParrot();
        expect(parrot.getSpeed()).toBe(12);
    });
});
