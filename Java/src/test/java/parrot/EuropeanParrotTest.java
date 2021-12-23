package parrot;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EuropeanParrotTest {

    @Test
    public void getSpeedOfEuropeanParrot() {
        Parrot parrot = new EuropeanParrot();
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }
}
