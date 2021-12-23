package parrot;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ParrotTest {
    @Test
    public void getSpeedOfEuropeanParrot() {
        Calculator parrot = new Calculator(new EuropeanParrot());
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_One_Coconut() {
        Calculator parrot = new Calculator(new AfricanParrot(1));
        assertEquals(3.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_Two_Coconuts() {
        Calculator parrot = new Calculator(new AfricanParrot(2));
        assertEquals(0.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_No_Coconuts() {
        Calculator parrot = new Calculator(new AfricanParrot(0));
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_nailed() {
        Calculator parrot = new Calculator(new NorwegianBlueParrot(1.5, true));
        assertEquals(0.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_not_nailed() {
        Calculator parrot = new Calculator(new NorwegianBlueParrot(1.5, false));
        assertEquals(18.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_not_nailed_high_voltage() {
        Calculator parrot = new Calculator(new NorwegianBlueParrot(4, false));
        assertEquals(24.0, parrot.getSpeed(), 0.0);
    }
}
