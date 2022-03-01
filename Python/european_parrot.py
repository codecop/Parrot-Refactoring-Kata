
from parrot import IParrot


class EuropeanParrot(IParrot):
    def __init__(self):
        pass

    def speed(self):
        return self._base_speed()