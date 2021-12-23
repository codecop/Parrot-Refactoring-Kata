package parrot;

/**
 * @author Günther Bernsteiner (gb)
 * @since 23.12.2021
 */
public class Calculator {

    private Parrot parrot;

    public Calculator(Parrot parrot) {
        this.parrot = parrot;
    }

    public double getSpeed() {
        return parrot.getSpeed();
    }
}
