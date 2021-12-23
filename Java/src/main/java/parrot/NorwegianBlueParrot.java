package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NorwegianBlueParrot implements Parrot {

    private static final double MINIMUM_SPEED = 24.0;

    private double voltage;
    private boolean isNailed;

    @Override
    public double getSpeed() {
        return (isNailed) ? STANDING_IN_PLACE : getBaseSpeed(voltage);
    }

    protected double getBaseSpeed(double voltage) {
        return Math.min(MINIMUM_SPEED, voltage * BASE_SPEED);
    }
}