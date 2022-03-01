from abc import abstractmethod

BASE_SPEED = 12.0
LOAD_FACTOR = 9.0
NAILED_SPEED = 0
MAXIMUM_VOLTAGE_SPEED = 24.0

class IParrot:
    @abstractmethod
    def speed(self): raise NotImplementedError
    @classmethod 
    def _base_speed(self):
        return BASE_SPEED

class AfricanParrot(IParrot):
    
    def __init__(self, number_of_coconuts):
        self._number_of_coconuts = number_of_coconuts
    def speed(self):
        return max(0, self._base_speed() - self._load_factor() * self._number_of_coconuts)

    def _load_factor(self):
        return LOAD_FACTOR

class NorwegianParrot(IParrot):
    def __init__(self, voltage, nailed):
        self._voltage = voltage
        self._nailed = nailed

    def speed(self):
        if self._nailed:
            return NAILED_SPEED
        else:
            return self._compute_base_speed_for_voltage(self._voltage)

    def _compute_base_speed_for_voltage(self, voltage):
        return min([MAXIMUM_VOLTAGE_SPEED, voltage * self._base_speed()])