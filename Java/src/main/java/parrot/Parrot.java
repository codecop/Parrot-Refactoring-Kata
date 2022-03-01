package parrot;

public abstract class Parrot {

    private int numberOfCoconuts;
    private double voltage;

    public Parrot(int numberOfCoconuts, double voltage, boolean isNailed) {
    }

    public double getSpeed() {
        throw new RuntimeException("Should be unreachable");
    }

    public double getBaseSpeed() {
        return 12.0;
    }

}
