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
)