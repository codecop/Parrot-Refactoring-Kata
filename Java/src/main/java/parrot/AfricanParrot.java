package parrot;

public class AfricanParrot extends Parrot implements Speedable{
    public AfricanParrot(ParrotType parrotType, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(parrotType, numberOfCoconuts, voltage, isNailed);
    }

    @Override
    public double getSpeed() {
        return super.getSpeed();
    }
}