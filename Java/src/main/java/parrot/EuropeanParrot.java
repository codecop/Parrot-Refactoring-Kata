package parrot;

public class EuropeanParrot extends Parrot{

    public EuropeanParrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
    }

    @Override
    public double getSpeed() {
        return super.getBaseSpeed();
    }
}
