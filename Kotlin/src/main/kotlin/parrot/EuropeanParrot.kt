package parrot

class EuropeanParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    isNailed: Boolean
) : Parrot(
    voltage = voltage
) {

    override val speed: Double
        get() = baseSpeed
}