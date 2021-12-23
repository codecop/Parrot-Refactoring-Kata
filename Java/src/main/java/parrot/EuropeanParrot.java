package parrot;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EuropeanParrot implements Parrot {

    @Override
    public double getSpeed() {
        return BASE_SPEED;
    }
}