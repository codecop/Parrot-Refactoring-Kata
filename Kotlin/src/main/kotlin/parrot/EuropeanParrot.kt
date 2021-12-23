package parrot

class EuropeanParrot(
    voltage: Double
) : Parrot() {

    override val speed: Double
        get() = baseSpeed
}