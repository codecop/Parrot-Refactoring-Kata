
from parrot import IParrot

LOAD_FACTOR = 9.0

class AfricanParrot(IParrot):
    
    def __init__(self, number_of_coconuts):
        self._number_of_coconuts = number_of_coconuts
    def speed(self):
        return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)

    def _load_factor(self):
        return LOAD_FACTOR