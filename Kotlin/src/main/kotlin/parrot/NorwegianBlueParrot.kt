package parrot

class NorwegianBlueParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    isNailed: Boolean
): Parrot(
    type = ParrotTypeEnum.NORWEGIAN_BLUE,
    numberOfCoconuts = numberOfCoconuts,
    voltage = voltage,
    isNailed = isNailed
) {

    override val speed: Double
        get() = if (isNailed) 0.0 else getBaseSpeed(voltage)

}
