package parrot

abstract class Parrot {

    abstract val speed: Double

    protected val baseSpeed: Double
        get() = 12.0

}


