package parrot;

/**
 *
 */
public abstract class Parrot {

//    public static Parrot getInstance(ParrotTypeEnum type) {
//        switch (type) {
//            case AFRICAN:
//                return new AfricanParrot()
//        }
//    }

    abstract public double getSpeed();

    protected double getBaseSpeed() {
        return 12.0;
    }
}
