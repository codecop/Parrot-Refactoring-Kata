package parrot

import kotlin.math.max
import kotlin.math.min

open class Parrot(
    private val type: ParrotTypeEnum,
    protected val numberOfCoconuts: Int,
    protected val voltage: Double,
    protected val isNailed: Boolean
) {

    open val speed: Double
        get() = when (type) {
            ParrotTypeEnum.EUROPEAN -> baseSpeed
            ParrotTypeEnum.AFRICAN -> max(0.0, baseSpeed - loadFactor * numberOfCoconuts)
            ParrotTypeEnum.NORWEGIAN_BLUE -> if (isNailed) 0.0 else getBaseSpeed(voltage)
        }

    protected val loadFactor: Double
        get() = 9.0

    protected val baseSpeed: Double
        get() = 12.0

    protected fun getBaseSpeed(voltage: Double): Double = min(24.0, voltage * baseSpeed)
}


