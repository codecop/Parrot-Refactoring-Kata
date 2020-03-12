package perfkata.parrot.a20171110a;

public class AfricanParrot extends Parrot {

    private final int numberOfCoconuts;

    public AfricanParrot(int numberOfCoconuts) {
        this.numberOfCoconuts = numberOfCoconuts;
    }

    @Override
    public double getSpeed() {
        return Math.max(0, getBaseSpeed() - slowDownDueToCoconuts());
    }

    private double slowDownDueToCoconuts() {
        return getLoadFactor() * numberOfCoconuts;
    }

    private double getLoadFactor() {
        return 9.0;
    }

}