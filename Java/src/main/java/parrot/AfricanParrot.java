package parrot;

/**
 * @author Günther Bernsteiner (gb)
 * @since 23.12.2021
 */
public class AfricanParrot extends Parrot {

    private int numberOfCoconuts;

    public AfricanParrot(int numberOfCoconuts) {
        super(ParrotTypeEnum.AFRICAN, numberOfCoconuts, 0.0, false);
        this.numberOfCoconuts = numberOfCoconuts;


    }
}
