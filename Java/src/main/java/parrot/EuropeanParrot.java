package parrot;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EuropeanParrot extends Parrot implements Speedable{

    @Override
    public double getSpeed() {
        return BASE_SPEED;
    }
}