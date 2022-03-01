import AfricanParrot from "../src/AfricanParrot";

describe('AfricanParrot', () => {

    it('should be instance of African Parrot.', () => {
        const africanParrot = new AfricanParrot(0, 0, false);
        expect(africanParrot).toBeInstanceOf(AfricanParrot);
    });
});
