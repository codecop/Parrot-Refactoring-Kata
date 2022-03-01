package parrot;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class EuropeanParrotTest {

    @Test
    public void shouldReturnSpeed(){
        EuropeanParrot europeanParrot = new EuropeanParrot(ParrotTypeEnum.EUROPEAN, 0, 0, false);

        double europeanParrotSpeed = europeanParrot.getSpeed();

        assertEquals(12.0, europeanParrotSpeed, 0.0);
    }

}
