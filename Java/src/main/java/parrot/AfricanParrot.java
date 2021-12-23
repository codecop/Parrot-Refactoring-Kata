package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AfricanParrot implements Speedable {

    private final int numberOfCoconuts;

    @Override
    public double getSpeed() {
        return Math.max(STANDING_IN_PLACE, BASE_SPEED - LOAD_FACTOR * numberOfCoconuts);
    }
}