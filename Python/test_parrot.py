
import unittest
from european_parrot import EuropeanParrot
from african_parrot import AfricanParrot
from norwegian_parrot import NorwegianParrot
from parameterized import parameterized

class TestSequence(unittest.TestCase):
    @parameterized.expand([
        [0, 12.0],
        [1, 3.0],
        [2, 0.0]
    ])
    def test_sequence(self, coconut_number, expected_speed):
        african_parrot = AfricanParrot(coconut_number)
        assert african_parrot.speed() == expected_speed

def test_speedNorwegianBlueParrot_not_nailed_high_voltage():
    norwegian_parrot = NorwegianParrot(4, False)
    assert norwegian_parrot.speed() == 24.0

def test_speedNorwegianBlueParrot_not_nailed():
    norwegian_parrot = NorwegianParrot(1.5, False)
    assert norwegian_parrot.speed() == 18.0

def test_speedNorwegianBlueParrot_nailed():
    norwegian_parrot = NorwegianParrot(1.5, True)
    assert norwegian_parrot.speed() == 0.0

def test_speedOfEuropeanParrot():
    european_parrot = EuropeanParrot()
    assert european_parrot.speed() == 12.0