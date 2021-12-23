package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AfricanParrot implements Speedable {

    private final int numberOfCoconuts;

    @Override
    public double getSpeed() {
        return 0;
    }
}