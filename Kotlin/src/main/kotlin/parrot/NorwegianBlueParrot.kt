package parrot

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

}
