
from parrot import NorwegianParrot, AfricanParrot, EuropeanParrot

def test_speedNorwegianBlueParrot_not_nailed_high_voltage2():
    parrot = NorwegianParrot(4, False)
    assert parrot.speed() == 24.0

def test_speedNorwegianBlueParrot_not_nailed2():
    parrot = NorwegianParrot(1.5, False)
    assert parrot.speed() == 18.0

def test_speedNorwegianBlueParrot_nailed2():
    parrot = NorwegianParrot(1.5, True)
    assert parrot.speed() == 0.0

def test_speedOfAfricanParrot_With_No_Coconuts2():
    parrot = AfricanParrot(0)
    assert parrot.speed() == 12.0

def test_speedOfAfricanParrot_With_Two_Coconuts2():
    parrot = AfricanParrot(2)
    assert parrot.speed() == 0.0

def test_speedOfAfricanParrot_With_One_Coconut2():
    parrot = AfricanParrot(1)
    assert parrot.speed() == 3.0

def test_speedOfEuropeanParrot2():
    parrot = EuropeanParrot()
    assert parrot.speed() == 12.0