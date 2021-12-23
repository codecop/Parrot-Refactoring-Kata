package parrot

import kotlin.math.min

class NorwegianBlueParrot(
    private val voltage: Double,
    private val isNailed: Boolean
) : Parrot() {

    private val nailedSpeed: Double = 0.0

    private val minBaseSpeed: Double = 24.0

    override val speed: Double
        get() = if (isNailed) nailedSpeed else getBaseSpeed(voltage)

    private fun getBaseSpeed(voltage: Double): Double = min(minBaseSpeed, voltage * baseSpeed)
}