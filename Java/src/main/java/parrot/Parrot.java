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

    public abstract double getSpeed();

    protected double getBaseSpeed() {
        return 12.0;
    }
}
