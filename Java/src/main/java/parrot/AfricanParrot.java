package parrot;

/**
 * @author Günther Bernsteiner (gb)
 * @since 23.12.2021
 */
public class AfricanParrot extends Parrot {public static final double LOAD_FACTOR = 9.0;

    private final int numberOfCoconuts;

    public AfricanParrot(int numberOfCoconuts) {
         this.numberOfCoconuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return Math.max(0, getBaseSpeed() - LOAD_FACTOR * numberOfCoconuts);
    }
}
