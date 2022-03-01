package parrot;

public class NorwegianBlueParrot extends Parrot {
    private double voltage;
    private boolean isNailed;

    public NorwegianBlueParrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(type, numberOfCoconuts, voltage, isNailed);
    }

    @Override
    public double getSpeed() {
        return super.getSpeed();
    }
}
