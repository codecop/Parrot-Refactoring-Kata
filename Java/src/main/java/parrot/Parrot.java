package parrot;

import parrot.speedcalculators.ParrotSpeedCalulator;

public class Parrot {

    private ParrotTypeEnum type;
    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;
    private ParrotSpeedCalulator parrotSpeedCalulator;

    public Parrot(ParrotTypeEnum type, int numberOfCoconuts, double voltage, boolean isNailed, ParrotSpeedCalulator parrotSpeedCalulator) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
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
