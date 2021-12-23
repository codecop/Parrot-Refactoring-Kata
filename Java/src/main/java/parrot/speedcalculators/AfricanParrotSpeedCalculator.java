package parrot.speedcalculators;

// Math.max(0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
public class AfricanParrotSpeedCalculator implements ParrotSpeedCalulator {

    public static double LOAD_FACTOR = 9.0;
    private int numberOfCoconuts;

    public AfricanParrotSpeedCalculator(int numberOfCoconuts) {
    }

    @Override
    public double getSpeed() {
        return 0;
    }
}
