package parrot

abstract class Parrot(
    protected val voltage: Double
) {

    abstract val speed: Double

    protected val baseSpeed: Double
        get() = 12.0

}


