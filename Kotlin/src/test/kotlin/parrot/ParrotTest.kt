package parrot

import org.junit.Test

import org.junit.Assert.assertEquals

class ParrotTest {

    @Test
    fun getSpeedOfEuropeanParrot() {
        val parrot = EuropeanParrot()
        assertEquals(12.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_One_Coconut() {
        val parrot = AfricanParrot(numberOfCoconuts = 1, voltage = 0.0)
        assertEquals(3.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_Two_Coconuts() {
        val parrot = AfricanParrot(numberOfCoconuts = 2, voltage = 0.0)
        assertEquals(0.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_No_Coconuts() {
        val parrot = AfricanParrot(numberOfCoconuts = 0, voltage = 0.0)
        assertEquals(12.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_nailed() {
        val parrot = NorwegianBlueParrot(voltage = 1.5, isNailed = true)
        assertEquals(0.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_not_nailed() {
        val parrot = NorwegianBlueParrot(voltage = 1.5, isNailed = false)
        assertEquals(18.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_not_nailed_high_voltage() {
        val parrot = NorwegianBlueParrot(voltage = 4.0, isNailed = false)
        assertEquals(24.0, parrot.speed, 0.0)
    }
}
