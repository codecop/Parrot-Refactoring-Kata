package parrot

import kotlin.math.max

class AfricanParrot(
    private val numberOfCoconuts: Int
) : Parrot() {

    private val loadFactor: Double = 9.0

    private val minSpeed: Double = 0.0

    override val speed: Double
        get() = max(minSpeed, baseSpeed - loadFactor * numberOfCoconuts)
}
