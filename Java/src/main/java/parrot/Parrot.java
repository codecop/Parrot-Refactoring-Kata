package parrot;

public abstract class Parrot {

    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;

    public Parrot(int numberOfCoconuts, double voltage, boolean isNailed) {
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    public double getSpeed() {
        throw new RuntimeException("Should be unreachable");
    }

    private double getNorwegianBlueParrotSpeed() {
        return (isNailed) ? 0 : getBaseSpeed(voltage);
    }

    private double getAfricanParrotSpeed() {
        return Math.max(0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
    }

    private double getBaseSpeed(double voltage) {
        return Math.min(24.0, voltage * getBaseSpeed());
    }

    private double getLoadFactor() {
        return 9.0;
    }

    public double getBaseSpeed() {
        return 12.0;
    }

}
