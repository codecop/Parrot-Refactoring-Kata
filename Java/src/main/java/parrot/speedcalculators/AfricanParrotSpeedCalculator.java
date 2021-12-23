package parrot.speedcalculators;

// Math.max(0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
public class AfricanParrotSpeedCalculator implements ParrotSpeedCalulator {

    public static double LOAD_FACTOR = 9.0;

    @Override
    public double getSpeed() {
        return 0;
    }
}
