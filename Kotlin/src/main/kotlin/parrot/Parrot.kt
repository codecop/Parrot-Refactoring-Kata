package parrot

import kotlin.math.min

abstract class Parrot(
    protected val voltage: Double
) {

    abstract val speed: Double

    protected val baseSpeed: Double
        get() = 12.0

    private val minBaseSpeed: Double
        get() = 24.0

    protected fun getBaseSpeed(voltage: Double): Double = min(minBaseSpeed, voltage * baseSpeed)
}


