package parrot

import kotlin.math.max

class AfricanParrot(
    private val numberOfCoconuts: Int,
    voltage: Double
): Parrot(
    voltage = voltage
) {
    override val speed: Double
        get() = max(0.0, baseSpeed - loadFactor * numberOfCoconuts)
}
