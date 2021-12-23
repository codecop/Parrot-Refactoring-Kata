package parrot

import kotlin.math.min

abstract class Parrot(
    protected val numberOfCoconuts: Int,
    protected val voltage: Double,
    protected val isNailed: Boolean
) {

    abstract val speed: Double

    protected val loadFactor: Double
        get() = 9.0

    protected val baseSpeed: Double
        get() = 12.0

    protected fun getBaseSpeed(voltage: Double): Double = min(24.0, voltage * baseSpeed)
}


