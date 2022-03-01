package parrot;

public class AfricanParrot extends Parrot {
    private int numberOfCoconuts;

    public AfricanParrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(numberOfCoconuts, voltage, isNailed);
        this.numberOfCoconuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return Math.max(0, getBaseSpeed() - getLoadFactor() * this.numberOfCoconuts);
    }

    private double getLoadFactor() {
        return 9.0;
    }
}
