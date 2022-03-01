package parrot;

public abstract class Parrot {


    public double getSpeed() {
        throw new RuntimeException("Should be unreachable");
    }

    public double getBaseSpeed() {
        return 12.0;
    }

}
