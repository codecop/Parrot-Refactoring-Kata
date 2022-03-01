import EuropeanParrot from '../src/europeanParrot';


describe('European Parrot', () => {
    it('should have base speed', () => {
        const europeanParrot = new EuropeanParrot();
        expect(europeanParrot.getSpeed()).toBe(12);
    });
})
