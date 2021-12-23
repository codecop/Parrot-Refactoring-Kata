package parrot.speedcalculators;

//return (isNailed) ? 0 : getBaseSpeed(voltage);
// getBaseSpeed(double voltage) {
//        return Math.min(24.0, voltage * getBaseSpeed());
//    }
public class NorwegianBlueParrotSpeedCalculator implements ParrotSpeedCalulator {

    private boolean isNailed;
    private double voltage;

    public NorwegianBlueParrotSpeedCalculator(boolean isNailed) {
        this.isNailed = isNailed;
    }

    @Override
    public double getSpeed() {
        return 0;
    }
}
