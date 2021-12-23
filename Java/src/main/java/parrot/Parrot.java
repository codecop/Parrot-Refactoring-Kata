package parrot;

import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder
public class Parrot implements Speedable {

    private final ParrotType parrotType;
    private final int numberOfCoconuts;
    private final double voltage;
    private final boolean isNailed;

    public double getSpeed() {
        switch (parrotType) {
            case EUROPEAN:
                return BASE_SPEED;
            case AFRICAN:
                return Math.max(STANDING_IN_PLACE, BASE_SPEED - LOAD_FACTOR * numberOfCoconuts);
            case NORWEGIAN_BLUE:
                return (isNailed) ? STANDING_IN_PLACE : getBaseSpeed(voltage);
            default:
                throw new UnknownParrotSpeciesException();
        }
    }

    private double getBaseSpeed(double voltage) {
        return Math.min(MINIMUM_SPEED, voltage * Speedable.BASE_SPEED);
    }

}