package parrot;

import lombok.AllArgsConstructor;
import lombok.Builder;

@AllArgsConstructor
@Builder
public class Parrot {

    public static final double LOAD_FACTOR = 9.0;
    public static final double BASE_SPEED = 12.0;
    public static final double MINIMUM_SPEED = 24.0;
    private final ParrotTypeEnum type;
    private final int numberOfCoconuts;
    private final double voltage;
    private final boolean isNailed;

    public double getSpeed() {
        switch (type) {
            case EUROPEAN:
                return BASE_SPEED;
            case AFRICAN:
                return Math.max(0, BASE_SPEED - LOAD_FACTOR * numberOfCoconuts);
            case NORWEGIAN_BLUE:
                return (isNailed) ? 0 : getBaseSpeed(voltage);
            default:
                throw new UnknownParrotSpeciesException();
        }
    }

    private double getBaseSpeed(double voltage) {
        return Math.min(MINIMUM_SPEED, voltage * BASE_SPEED);
    }

}