package parrot;

public class AfricanParrot extends Parrot {
    private int numberOfCocunuts;

    public AfricanParrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(type, numberOfCoconuts, voltage, isNailed);
        this.numberOfCocunuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return super.getSpeed();
    }

    private double getLoadFactor() {
        return 9.0;
    }
}
