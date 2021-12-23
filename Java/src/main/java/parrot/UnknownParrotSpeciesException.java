package parrot;

public class UnknownParrotSpeciesException extends RuntimeException {

    public UnknownParrotSpeciesException() {
        super();
    }

    public UnknownParrotSpeciesException(String message) {
        super(message);
    }
}