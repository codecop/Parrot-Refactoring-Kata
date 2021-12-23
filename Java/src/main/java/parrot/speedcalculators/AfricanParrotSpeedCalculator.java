package parrot.speedcalculators;

public class AfricanParrotSpeedCalculator implements ParrotSpeedCalulator {

    public static double LOAD_FACTOR = 9.0;
    private int numberOfCoconuts;

    public AfricanParrotSpeedCalculator(int numberOfCoconuts) {
        this.numberOfCoconuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return Math.max(0, BASE_SPEED - LOAD_FACTOR * numberOfCoconuts);
    }
}
