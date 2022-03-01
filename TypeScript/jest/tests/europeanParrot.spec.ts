import EuropeanParrot from '../src/europeanParrot';


describe('European Parrot', () => {
    it('should have base speed', () => {
        const europeanParrot = new EuropeanParrot(0, 0, false);
        expect(europeanParrot.getSpeed()).toBe(12);
    });
})
