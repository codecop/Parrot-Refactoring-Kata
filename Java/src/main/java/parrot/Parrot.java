package parrot;

import parrot.speedcalculators.ParrotSpeedCalulator;

public class Parrot {

    private final ParrotSpeedCalulator parrotSpeedCalulator;

    public Parrot(ParrotSpeedCalulator parrotSpeedCalulator) {
        this.parrotSpeedCalulator = parrotSpeedCalulator;
    }

    public double getSpeed() {
        return parrotSpeedCalulator.getSpeed();
    }


    private double getBaseSpeed() {
        return 12.0;
    }

}
