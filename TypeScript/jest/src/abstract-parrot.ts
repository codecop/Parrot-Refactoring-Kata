export default abstract class AbstractParrot {

    public abstract getSpeed(): number;

    protected getBaseSpeed(): number {
        return 12;
    }
}
