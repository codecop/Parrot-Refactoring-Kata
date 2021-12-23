package parrot;

public class NorwegianBlueParrot extends Parrot {
    private static final double MAX_SPEED = 24.0;
    private final boolean isNailed;
    private final double voltage;

    public NorwegianBlueParrot(double voltage, boolean isNailed) {

        this.isNailed = isNailed;
        this.voltage = voltage;
    }

    @Override
    public double getSpeed() {
        return (isNailed) ? 0 : getSpeedFromVoltage(voltage);
    }

    private double getSpeedFromVoltage(double voltage) {
        return Math.min(MAX_SPEED, voltage * getBaseSpeed());
    }
}
