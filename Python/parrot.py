from enum import Enum  # Enum is introduced in Python 3.4.
from abc import abstractmethod

class ParrotType(Enum):  # If it is not available, just remove it.
    EUROPEAN = 1
    AFRICAN = 2
    NORWEGIAN_BLUE = 3 

class IParrot:
    @abstractmethod
    def speed(self): raise NotImplementedError
    @classmethod 
    def _base_speed(self):
        return 12.0

class Parrot:

    def __init__(self, type_of_parrot, number_of_coconuts, voltage, nailed):
        self._type = type_of_parrot
        self._number_of_coconuts = number_of_coconuts
        self._voltage = voltage
        self._nailed = nailed

    def speed(self):
        if self._type == ParrotType.EUROPEAN:
            return self._base_speed()
        if self._type == ParrotType.AFRICAN:
            return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)
        if self._type == ParrotType.NORWEGIAN_BLUE:
            if self._nailed:
                return 0
            else:
                return self._compute_base_speed_for_voltage(self._voltage)

        raise ValueError("should be unreachable")

    def _compute_base_speed_for_voltage(self, voltage):
        return min([24.0, voltage * self._base_speed()])

    def _load_factor(self):
        return 9.0

    def _base_speed(self):
        return 12.0

class European_Parrot(IParrot):

    def __init__(self):
        pass

    def speed(self):
        return self._base_speed()



class African_Parrot(IParrot):
    
    def __init__(self, number_of_coconuts):
        self._number_of_coconuts = number_of_coconuts
    def speed(self):
        return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)

    def _load_factor(self):
        return 9.0

class Norwegian_Parrot(Parrot):
    def __init__(self, voltage, nailed):
        self._voltage = voltage
        self._nailed = nailed

    def speed(self):
        if self._nailed:
            return 0
        else:
            return self._compute_base_speed_for_voltage(self._voltage)