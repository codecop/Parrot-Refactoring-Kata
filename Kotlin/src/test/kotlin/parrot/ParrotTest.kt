package parrot

import org.junit.Test

import org.junit.Assert.assertEquals

class ParrotTest {

    @Test
    fun getSpeedOfEuropeanParrot() {
        val parrot = EuropeanParrot(0, 0.0, false)
        assertEquals(12.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_One_Coconut() {
        val parrot = AfricanParrot(1, 0.0)
        assertEquals(3.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_Two_Coconuts() {
        val parrot = AfricanParrot(2, 0.0)
        assertEquals(0.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedOfAfricanParrot_With_No_Coconuts() {
        val parrot = AfricanParrot(0, 0.0)
        assertEquals(12.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_nailed() {
        val parrot = NorwegianBlueParrot(1.5, true)
        assertEquals(0.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_not_nailed() {
        val parrot = NorwegianBlueParrot(1.5, false)
        assertEquals(18.0, parrot.speed, 0.0)
    }

    @Test
    fun getSpeedNorwegianBlueParrot_not_nailed_high_voltage() {
        val parrot = NorwegianBlueParrot(4.0, false)
        assertEquals(24.0, parrot.speed, 0.0)
    }
}
