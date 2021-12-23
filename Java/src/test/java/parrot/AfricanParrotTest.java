package parrot;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AfricanParrotTest {

    @Test
    public void getSpeedOfAfricanParrot_With_One_Coconut() {
        Parrot parrot = new AfricanParrot(1);
        assertEquals(3.0, parrot.getSpeed(), 0.0);
    }
}
