package parrot;

public class Parrot {

    public static final double LOAD_FACTOR = 9.0;
    public static final double BASE_SPEED = 12.0;
    public static final double MINIMUM_SPEED = 24.0;
    private ParrotTypeEnum type;
    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;

    public Parrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public double getSpeed() {
        switch (type) {
            case EUROPEAN:
                return BASE_SPEED;
            case AFRICAN:
                return Math.max(0, BASE_SPEED - getLoadFactor() * numberOfCoconuts);
            case NORWEGIAN_BLUE:
                return (isNailed) ? 0 : getBaseSpeed(voltage);
            default:
                throw new RuntimeException("Should be unreachable");
        }
    }

    private double getBaseSpeed(double voltage) {
        return Math.min(MINIMUM_SPEED, voltage * getBaseSpeed());
    }

    private double getLoadFactor() {
        return LOAD_FACTOR;
    }

    private double getBaseSpeed() {
        return BASE_SPEED;
    }

}