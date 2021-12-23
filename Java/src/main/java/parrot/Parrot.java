package parrot;

/**
 *
 */
public abstract class Parrot {

    private ParrotTypeEnum type;
    private int numberOfCoconuts;
    private double voltage;
    private boolean isNailed;

    public Parrot() {
    }

//    public static Parrot getInstance(ParrotTypeEnum type) {
//        switch (type) {
//            case AFRICAN:
//                return new AfricanParrot()
//        }
//    }

    abstract public double getSpeed();

     private double getBaseSpeed(double voltage) {
        return Math.min(24.0, voltage * getBaseSpeed());
    }

    private double getLoadFactor() {
        return 9.0;
    }

    protected double getBaseSpeed() {
        return 12.0;
    }

}
