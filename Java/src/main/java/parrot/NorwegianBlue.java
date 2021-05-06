package parrot;

public class NorwegianBlue extends Parrot{
    private final boolean isNailed;
    private final double voltage;

    public NorwegianBlue(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(type, numberOfCoconuts, voltage);
        this.isNailed = isNailed;
        this.voltage = voltage;
    }
    @Override
    public double getSpeed(){
        return (isNailed) ? 0 : super.getBaseSpeed(voltage);
    }
}
