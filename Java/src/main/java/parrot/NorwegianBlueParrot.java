package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NorwegianBlueParrot implements Speedable{

    private final double voltage;

    @Override
    public double getSpeed() {
        return 0;
    }
}