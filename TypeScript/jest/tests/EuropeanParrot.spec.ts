import EuropeanParrot from "../src/EuropeanParrot";

describe('EuropeanParrot', () => {

    it('gets speed of European Parrot', () => {
        const europeanParrot = new EuropeanParrot(0, 0, false);
        expect(europeanParrot.getSpeed()).toBe(12);
    });
});
