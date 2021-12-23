package parrot;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EuropeanParrot extends Parrot implements Speedable{

    public EuropeanParrot(ParrotType parrotType, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(parrotType, numberOfCoconuts, voltage, isNailed);
    }

    @Override
    public double getSpeed() {
        return BASE_SPEED;
    }
}