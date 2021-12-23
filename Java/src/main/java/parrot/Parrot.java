package parrot;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Parrot implements Speedable {

    private ParrotType parrotType;
    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;

    @Override
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

    protected double getBaseSpeed(double voltage) {
        return Math.min(MINIMUM_SPEED, voltage * BASE_SPEED);
    }

}