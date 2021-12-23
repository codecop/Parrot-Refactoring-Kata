package parrot;

import parrot.speedcalculators.ParrotSpeedCalulator;

public class Parrot {

    private boolean isNailed;
    private ParrotSpeedCalulator parrotSpeedCalulator;

    public Parrot(boolean isNailed, ParrotSpeedCalulator parrotSpeedCalulator) {
        this.isNailed = isNailed;
        this.parrotSpeedCalulator = parrotSpeedCalulator;
    }

    public double getSpeed() {
        return parrotSpeedCalulator.getSpeed();
    }

    private double getBaseSpeed(double voltage) {
        return Math.min(24.0, voltage * getBaseSpeed());
    }

    private double getLoadFactor() {
        return 9.0;
    }

    private double getBaseSpeed() {
        return 12.0;
    }

}
