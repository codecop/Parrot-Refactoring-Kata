package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AfricanParrot extends Parrot implements Speedable{

    private final int numberOfCoconuts;

    @Override
    public double getSpeed() {
        return Math.max(STANDING_IN_PLACE, BASE_SPEED - LOAD_FACTOR * numberOfCoconuts);
    }
}