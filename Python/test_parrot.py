
import unittest
from european_parrot import EuropeanParrot
from african_parrot import AfricanParrot
from norwegian_parrot import NorwegianParrot
from parameterized import parameterized

class AfricanParrotTestSequence(unittest.TestCase):
    @parameterized.expand([
        [0, 12.0],
        [1, 3.0],
        [2, 0.0]
    ])
    def test_sequence(self, coconut_number, expected_speed):
        african_parrot = AfricanParrot(coconut_number)
        assert african_parrot.speed() == expected_speed

class NorwegianParrotTestSequence(unittest.TestCase):
    @parameterized.expand([
        [4, False, 24.0],
        [1.5, False, 18.0],
        [1.5, True, 0.0],
    ])
    def test_sequence(self, voltage, is_nailed, expected_speed):
        norwegian_parrot = NorwegianParrot(voltage, is_nailed)
        assert norwegian_parrot.speed() == expected_speed

def test_speedOfEuropeanParrot():
    european_parrot = EuropeanParrot()
    assert european_parrot.speed() == 12.0