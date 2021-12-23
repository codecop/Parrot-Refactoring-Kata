package parrot

class EuropeanParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    isNailed: Boolean
) : Parrot(
    voltage = voltage,
    isNailed = isNailed
) {

    override val speed: Double
        get() = baseSpeed
}