package parrot;

public class NorwegianBlueParrot extends Parrot {
    private boolean isNailed;
    private double voltage;

    public NorwegianBlueParrot(double voltage, boolean isNailed) {

        super(ParrotTypeEnum.NORWEGIAN_BLUE, 0, voltage, isNailed);

        this.isNailed = isNailed;
        this.voltage = voltage;
    }
}
