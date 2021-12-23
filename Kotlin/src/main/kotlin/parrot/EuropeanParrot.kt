package parrot

class EuropeanParrot(
    voltage: Double
) : Parrot(
    voltage = voltage
) {

    override val speed: Double
        get() = baseSpeed
}