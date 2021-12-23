package parrot;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AfricanParrot implements Speedable {
    @Override
    public double getSpeed() {
        return 0;
    }
}