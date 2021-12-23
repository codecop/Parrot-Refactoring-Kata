package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NorwegianBlueParrot extends Parrot implements Speedable {
    private double voltage;
    private boolean isNailed;

    public NorwegianBlueParrot(ParrotType parrotType, int numberOfCoconuts, double voltage, boolean isNailed) {
        super(parrotType, numberOfCoconuts, voltage, isNailed);
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    @Override
    public double getSpeed() {
        return super.getSpeed();
    }
}