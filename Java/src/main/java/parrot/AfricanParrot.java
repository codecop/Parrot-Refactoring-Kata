package parrot;

public class AfricanParrot extends Parrot implements Speedable{

    private final int numberOfCoconuts;

    public AfricanParrot(ParrotType parrotType, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(parrotType, numberOfCoconuts, voltage, isNailed);
        this.numberOfCoconuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return super.getSpeed();
    }
}