package parrot;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class EuropeanParrot implements Speedable {

    @Override
    public double getSpeed() {
        return BASE_SPEED;
    }
}