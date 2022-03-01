import NorwegianBlueParrot from "../src/NorwegianBlueParrot";

describe('NorwegianBlueParrot', () => {

    it('should be instance of African Parrot.', () => {
        const norwegianBlueParrot = new NorwegianBlueParrot(0, 0, false);
        expect(norwegianBlueParrot).toBeInstanceOf(NorwegianBlueParrot);
    });
});
