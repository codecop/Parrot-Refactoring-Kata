package parrot;

public class EuropeanParrot extends Parrot{

    public EuropeanParrot(int numberOfCoconuts, double voltage, boolean isNailed) {
    }

    @Override
    public double getSpeed() {
        return super.getBaseSpeed();
    }
}
