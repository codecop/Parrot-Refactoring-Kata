from enum import Enum  # Enum is introduced in Python 3.4.


class ParrotType(Enum):  # If it is not available, just remove it.
    EUROPEAN = 1
    AFRICAN = 2
    NORWEGIAN_BLUE = 3


class EuropeanParrot(object):
    def speed(self):
        return 12.0


class NorvegianBlueParrot(EuropeanParrot):
    def __init__(self,voltage, base_speed):
        self.voltage = voltage
        self.base_speed = base_speed

    def speed(self, nailed):
        if nailed:
            return 0
        else:
            return min([24.0, self.voltage * self.base_speed])


class Parrot:

    def __init__(self, type_of_parrot, number_of_coconuts, voltage, nailed):
        self._type = type_of_parrot
        self._number_of_coconuts = number_of_coconuts
        self._voltage = voltage
        self._nailed = nailed

    def speed(self):
        if self._type == ParrotType.EUROPEAN:
            return EuropeanParrot().speed()
        if self._type == ParrotType.AFRICAN:
            return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)
        if self._type == ParrotType.NORWEGIAN_BLUE:
            speed = self._base_speed()
            return NorvegianBlueParrot(self._voltage, speed).speed(self._nailed)

        raise ValueError("should be unreachable")

    def _load_factor(self):
        return 9.0

    def _base_speed(self):
        return 12.0
