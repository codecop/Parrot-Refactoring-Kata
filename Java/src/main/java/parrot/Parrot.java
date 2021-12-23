package parrot;

public interface Parrot {

    double LOAD_FACTOR = 9.0;
    double BASE_SPEED = 12.0;
    double MINIMUM_SPEED = 24.0;
    int STANDING_IN_PLACE = 0;

    double getSpeed();
}