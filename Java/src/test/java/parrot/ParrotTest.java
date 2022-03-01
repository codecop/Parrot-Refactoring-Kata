package parrot;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ParrotTest {

    @Test
    public void getSpeedOfEuropeanParrot() {
        Parrot parrot = new Parrot(ParrotTypeEnum.EUROPEAN, 0, 0, false);
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_One_Coconut() {
        Parrot parrot = new Parrot(ParrotTypeEnum.AFRICAN, 1, 0, false);
        assertEquals(3.0, parrot.getSpeed(), 0.0);
    }


    @Test
    public void getSpeedOfAfricanParrot_With_Two_Coconuts() {
        Parrot parrot = new Parrot(ParrotTypeEnum.AFRICAN, 2, 0, false);
        assertEquals(0.0, parrot.getSpeed(), 0.0);
    }
}
