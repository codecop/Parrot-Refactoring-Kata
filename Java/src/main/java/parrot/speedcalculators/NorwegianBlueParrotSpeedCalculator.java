package parrot.speedcalculators;

//return (isNailed) ? 0 : getBaseSpeed(voltage);
// getBaseSpeed(double voltage) {
//        return Math.min(24.0, voltage * getBaseSpeed());
//    }
public class NorwegianBlueParrotSpeedCalculator implements ParrotSpeedCalulator {

    static private double NORWEGIAN_BLUE_MIN_SPEED = 24.0;
    private boolean isNailed;
    private double voltage;

    public NorwegianBlueParrotSpeedCalculator(boolean isNailed, double voltage) {
        this.isNailed = isNailed;
        this.voltage = voltage;
    }

    @Override
    public double getSpeed() {
        return Math.min(NORWEGIAN_BLUE_MIN_SPEED, voltage * BASE_SPEED);
    }
}
