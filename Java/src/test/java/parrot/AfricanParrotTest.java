package parrot;

import org.junit.Assert;
import org.junit.Test;


public class AfricanParrotTest {

    @Test
    public void shouldReturnSpeedWithOneCoconut(){
        AfricanParrot africanParrot = new AfricanParrot(ParrotTypeEnum.AFRICAN, 1, 0, false);

        double africanParrotSpeed = africanParrot.getSpeed();

        Assert.assertEquals(3.0, africanParrotSpeed, 0.0);
    }

}
