package parrot

class NorwegianBlueParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    private val isNailed: Boolean
): Parrot(
    voltage = voltage
) {

    override val speed: Double
        get() = if (isNailed) 0.0 else getBaseSpeed(voltage)

}
