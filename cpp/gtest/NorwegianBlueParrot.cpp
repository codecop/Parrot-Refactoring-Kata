#include "NorwegianBlueParrot.h"
#include <algorithm>


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) : ParrotBase(NORWEGIAN_BLUE, voltage, isNailed), voltage(voltage), isNailed(isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
	return (isNailed) ? 0 : getBaseSpeed2(voltage);
}


double NorwegianBlueParrot::getBaseSpeed2(double current_voltage) {
	return std::min(24.0, current_voltage * baseSpeed);
}