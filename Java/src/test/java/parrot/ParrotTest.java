package parrot;

import org.junit.Test;
import parrot.speedcalculators.AfricanParrotSpeedCalculator;
import parrot.speedcalculators.EuropeanParrotSpeedCalculator;
import parrot.speedcalculators.NorwegianBlueParrotSpeedCalculator;

import static org.junit.Assert.assertEquals;

public class ParrotTest {

    @Test
    public void getSpeedOfEuropeanParrot() {
        Parrot parrot = new Parrot(new EuropeanParrotSpeedCalculator());
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_One_Coconut() {
        Parrot parrot = new Parrot(new AfricanParrotSpeedCalculator(1));
        assertEquals(3.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_Two_Coconuts() {
        Parrot parrot = new Parrot(new AfricanParrotSpeedCalculator(2));
        assertEquals(0.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedOfAfricanParrot_With_No_Coconuts() {
        Parrot parrot = new Parrot(new AfricanParrotSpeedCalculator(0));
        assertEquals(12.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_nailed() {
        Parrot parrot = new Parrot(new NorwegianBlueParrotSpeedCalculator(true, 1.5));
        assertEquals(0.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_not_nailed() {
        Parrot parrot = new Parrot(new NorwegianBlueParrotSpeedCalculator(false, 1.5));
        assertEquals(18.0, parrot.getSpeed(), 0.0);
    }

    @Test
    public void getSpeedNorwegianBlueParrot_not_nailed_high_voltage() {
        Parrot parrot = new Parrot(new NorwegianBlueParrotSpeedCalculator(false, 4));
        assertEquals(24.0, parrot.getSpeed(), 0.0);
    }
}
