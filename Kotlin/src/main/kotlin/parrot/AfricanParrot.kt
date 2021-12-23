package parrot

class AfricanParrot(
    numberOfCoconuts: Int,
    voltage: Double,
    isNailed: Boolean
): Parrot(
    type = ParrotTypeEnum.AFRICAN,
    numberOfCoconuts = numberOfCoconuts,
    voltage = voltage,
    isNailed = isNailed
)