#include "NorwegianBlueParrot.h"
#include <algorithm>


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) : ParrotBase(), voltage(voltage), isNailed(isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
	return (isNailed) ? 0 : getBaseSpeed(voltage);
}


double NorwegianBlueParrot::getBaseSpeed(double current_voltage) {
	return std::min(24.0, current_voltage * baseSpeed);
}