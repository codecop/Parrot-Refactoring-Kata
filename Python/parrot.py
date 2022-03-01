from abc import abstractmethod

BASE_SPEED = 12.0

class IParrot:
    @abstractmethod
    def speed(self): raise NotImplementedError
    @classmethod 
    def _base_speed(self):
        return BASE_SPEED
