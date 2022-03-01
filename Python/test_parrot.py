
from european_parrot import EuropeanParrot
from african_parrot import AfricanParrot
from norwegian_parrot import NorwegianParrot
def test_speedNorwegianBlueParrot_not_nailed_high_voltage():
    norwegian_parrot = NorwegianParrot(4, False)
    assert norwegian_parrot.speed() == 24.0

def test_speedNorwegianBlueParrot_not_nailed():
    norwegian_parrot = NorwegianParrot(1.5, False)
    assert norwegian_parrot.speed() == 18.0

def test_speedNorwegianBlueParrot_nailed():
    norwegian_parrot = NorwegianParrot(1.5, True)
    assert norwegian_parrot.speed() == 0.0

def test_speedOfAfricanParrot_With_No_Coconuts():
    parrot = AfricanParrot(0)
    assert parrot.speed() == 12.0

def test_speedOfAfricanParrot_With_Two_Coconuts():
    african_parrot = AfricanParrot(2)
    assert african_parrot.speed() == 0.0

def test_speedOfAfricanParrot_With_One_Coconut():
    african_parrot = AfricanParrot(1)
    assert african_parrot.speed() == 3.0

def test_speedOfEuropeanParrot():
    european_parrot = EuropeanParrot()
    assert european_parrot.speed() == 12.0