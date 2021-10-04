from enum import Enum  # Enum is introduced in Python 3.4.


class ParrotType(Enum):  # If it is not available, just remove it.
    AFRICAN = 2


class EuropeanParrot(object):
    _base_speed = 12

    def speed(self):
        return self._base_speed


class NorvegianBlueParrot(EuropeanParrot):
    def __init__(self, voltage):
        self.voltage = voltage

    def speed(self, nailed):
        if nailed:
            return 0
        else:
            return min([24.0, self.voltage * self._base_speed])


class Parrot:

    def __init__(self, type_of_parrot, number_of_coconuts, voltage, nailed):
        self._type = type_of_parrot
        self._number_of_coconuts = number_of_coconuts

    def speed(self):
        if self._type == ParrotType.AFRICAN:
            return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)

        raise ValueError("should be unreachable")

    def _load_factor(self):
        return 9.0

    def _base_speed(self):
        return 12.0
