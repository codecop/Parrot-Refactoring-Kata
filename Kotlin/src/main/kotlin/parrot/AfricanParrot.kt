package parrot

import kotlin.math.max

class AfricanParrot(
    private val numberOfCoconuts: Int
) : Parrot() {

    private val loadFactor: Double
        get() = 9.0

    private val minSpeed: Double
        get() = 0.0

    override val speed: Double
        get() = max(minSpeed, baseSpeed - loadFactor * numberOfCoconuts)
}
