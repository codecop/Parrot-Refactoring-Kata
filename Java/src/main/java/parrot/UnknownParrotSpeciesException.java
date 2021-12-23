package parrot;

public class UnknownParrotSpeciesException extends RuntimeException {

    public UnknownParrotSpeciesException() {
        super("This Parrot Species is unknown!");
    }
}