package parrot;

public class NorwegianBlueParrot extends Parrot {
    private double voltage;
    private boolean isNailed;

    public NorwegianBlueParrot(int numberOfCoconuts, double voltage, boolean isNailed) {
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    @Override
    public double getSpeed() {
        return (isNailed) ? 0 : getVoltageBaseSpeed();
    }

    private double getVoltageBaseSpeed() {
        return Math.min(24.0, voltage * super.getBaseSpeed());
    }
}
