#include "NorwegianBlueParrot.h"
#include <algorithm>


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) : Parrot(), voltage(voltage), isNailed(isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
	return (isNailed) ? 0 : std::min(24.0, voltage * baseSpeed);
}