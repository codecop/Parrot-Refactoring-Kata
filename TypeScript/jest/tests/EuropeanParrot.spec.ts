import EuropeanParrot from "../src/EuropeanParrot";

describe('EuropeanParrot', () => {

    it('should be instance of European Parrot.', () => {
        const europeanParrot = new EuropeanParrot();
        expect(europeanParrot).toBeInstanceOf(EuropeanParrot);
    });

    it('gets speed of European Parrot', () => {
        const europeanParrot = new EuropeanParrot();
        expect(europeanParrot.getSpeed()).toBe(12);
    });
});
