export default abstract class AbstractParrot {

    private readonly BASE_SPEED = 12;

    public abstract getSpeed(): number;

    protected getBaseSpeed(): number {
        return this.BASE_SPEED;
    }
}
