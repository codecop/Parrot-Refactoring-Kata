package parrot;

public class EuropeanParrot extends Parrot {
    public EuropeanParrot() {
        super(ParrotTypeEnum.EUROPEAN, 0, 0.0, false);
    }

    @Override
    public double getSpeed() {
        return super.getBaseSpeed();
    }
}
