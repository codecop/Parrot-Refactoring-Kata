package parrot;

public abstract class Parrot {

    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;

    public Parrot(int numberOfCoconuts, double voltage, boolean isNailed) {
    }

    public double getSpeed() {
        throw new RuntimeException("Should be unreachable");
    }


    private double getLoadFactor() {
        return 9.0;
    }

    public double getBaseSpeed() {
        return 12.0;
    }

}
