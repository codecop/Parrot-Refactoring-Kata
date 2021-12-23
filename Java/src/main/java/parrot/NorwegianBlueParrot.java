package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NorwegianBlueParrot extends Parrot implements Speedable {
    private double voltage;
    private boolean isNailed;

    @Override
    public double getSpeed() {
        return (isNailed) ? STANDING_IN_PLACE : getBaseSpeed(voltage);
    }
}