#include "NorwegianBlueParrot.h"



NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) : ParrotBase(NORWEGIAN_BLUE, voltage, isNailed), voltage(voltage), isNailed(isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
	return (isNailed) ? 0 : getBaseSpeed(voltage);
}
