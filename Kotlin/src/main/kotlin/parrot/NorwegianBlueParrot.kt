package parrot

import kotlin.math.min

class NorwegianBlueParrot(
    voltage: Double,
    private val isNailed: Boolean
) : Parrot(
    voltage = voltage
) {

    private val nailedSpeed: Double
        get() = 0.0

    override val speed: Double
        get() = if (isNailed) nailedSpeed else getBaseSpeed(voltage)


    private val minBaseSpeed: Double
        get() = 24.0

    protected fun getBaseSpeed(voltage: Double): Double = min(minBaseSpeed, voltage * baseSpeed)
}
