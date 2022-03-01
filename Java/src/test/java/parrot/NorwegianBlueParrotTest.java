package parrot;


import org.junit.Assert;
import org.junit.Test;



public class NorwegianBlueParrotTest {

    @Test
    public void shouldReturnSpeedNailed(){
        NorwegianBlueParrot norwegianBlueParrot = new NorwegianBlueParrot(ParrotTypeEnum.NORWEGIAN_BLUE, 0, 0, true);

        double norwegianBlueParrotSpeed = norwegianBlueParrot.getSpeed();

        Assert.assertEquals(0.0, norwegianBlueParrotSpeed, 0.0);
    }

}
