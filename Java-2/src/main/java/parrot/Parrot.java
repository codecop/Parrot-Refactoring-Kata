package parrot;

public class Parrot {

    private ParrotTypeEnum type;
    protected double voltage;
    protected boolean isNailed;

    public Parrot(ParrotTypeEnum _type, int numberOfCoconuts, double voltage, boolean isNailed) {
        this.type = _type;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public double getSpeed() {
        throw new RuntimeException("Should be unreachable");
    }

    protected double getBaseSpeed() {
        return 12.0;
    }

}
