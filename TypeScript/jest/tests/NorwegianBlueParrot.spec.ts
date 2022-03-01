import NorwegianBlueParrot from "../src/NorwegianBlueParrot";

describe('NorwegianBlueParrot', () => {

    it('should be instance of African Parrot.', () => {
        const norwegianBlueParrot = new NorwegianBlueParrot(0, false);
        expect(norwegianBlueParrot).toBeInstanceOf(NorwegianBlueParrot);
    });

    it('gets speed of Norwegian Blue Parrot nailed', () => {
        const norwegianBlueParrot = new NorwegianBlueParrot(1.5, true);
        expect(norwegianBlueParrot.getSpeed()).toBe(0);
    });

    it('gets speed of Norwegian Blue Parrot not nailed', () => {
        const norwegianBlueParrot = new NorwegianBlueParrot(1.5, false);
        expect(norwegianBlueParrot.getSpeed()).toBe(18);
    });

    it('gets speed of Norwegian Blue Parrot not nailed high voltage', () => {
        const norwegianBlueParrot = new NorwegianBlueParrot(4, false);
        expect(norwegianBlueParrot.getSpeed()).toBe(24);
    });
});
