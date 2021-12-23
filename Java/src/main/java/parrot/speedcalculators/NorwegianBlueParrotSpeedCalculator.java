package parrot.speedcalculators;

//return (isNailed) ? 0 : getBaseSpeed(voltage);
public class NorwegianBlueParrotSpeedCalculator implements ParrotSpeedCalulator {

    private boolean isNailed;

    public NorwegianBlueParrotSpeedCalculator(boolean isNailed) {
        this.isNailed = isNailed;
    }

    @Override
    public double getSpeed() {
        return 0;
    }
}
