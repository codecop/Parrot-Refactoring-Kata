package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class NorwegianBlueParrot implements Speedable{
    @Override
    public double getSpeed() {
        return 0;
    }
}