import AfricanParrot from '../src/africanParrot';


describe('AfricanParrot', () => {
    it.each([
        {numberOfCoconuts: 0, expectedSpeed: 12},
        {numberOfCoconuts: 1, expectedSpeed: 3},
        {numberOfCoconuts: 2, expectedSpeed: 0 }
    ])(
        'should have correct speed with %d coconuts',
        ({numberOfCoconuts, expectedSpeed}) => {
            const parrot = new AfricanParrot(numberOfCoconuts, 0, false);
            expect(parrot.getSpeed()).toBe(expectedSpeed);
        }
    );
});
