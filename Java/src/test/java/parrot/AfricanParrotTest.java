package parrot;

import org.junit.Assert;
import org.junit.Test;


public class AfricanParrotTest {

    @Test
    public void shouldReturnSpeedWithOneCoconut(){
        AfricanParrot africanParrot = new AfricanParrot(1, 0, false);

        double africanParrotSpeed = africanParrot.getSpeed();

        Assert.assertEquals(3.0, africanParrotSpeed, 0.0);
    }

    @Test
    public void shouldReturnSpeedWithTwoCoconut(){
        AfricanParrot africanParrot = new AfricanParrot(2, 0, false);

        double africanParrotSpeed = africanParrot.getSpeed();

        Assert.assertEquals(0.0, africanParrotSpeed, 0.0);
    }

}
