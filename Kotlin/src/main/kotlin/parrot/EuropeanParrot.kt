package parrot

class EuropeanParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    isNailed: Boolean
) : Parrot(
    type = ParrotTypeEnum.EUROPEAN,
    numberOfCoconuts = numberOfCoconuts,
    voltage = voltage,
    isNailed = isNailed
) {

    override val speed: Double
        get() = baseSpeed
}