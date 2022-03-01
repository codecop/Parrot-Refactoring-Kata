package parrot;

public class AfricanParrot extends Parrot {
    private int numberOfCocunuts;

    public AfricanParrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(type, numberOfCoconuts, voltage, isNailed);
        this.numberOfCocunuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return Math.max(0, getBaseSpeed() - getLoadFactor() * this.numberOfCocunuts);
    }

    private double getLoadFactor() {
        return 9.0;
    }
}
