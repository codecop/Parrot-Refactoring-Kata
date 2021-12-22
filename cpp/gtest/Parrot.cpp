#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

double IParrot::getSpeed()
{
	throw std::invalid_argument("Should be unreachable");
}

double ParrotBase::getSpeed()
{
	return 12.0;
}

double ParrotEuropean::getSpeed()
{
    return ParrotBase::getSpeed();
}

double ParrotAfrican::getLoadFactor()
{
	return 9.0;
}

ParrotAfrican::ParrotAfrican(int numberOfCoconuts) : numberOfCoconuts(numberOfCoconuts)
{

}

double ParrotAfrican::getSpeed()
{
    return max(0.0, ParrotBase::getSpeed() - getLoadFactor() * numberOfCoconuts);
}

ParrotNorwegianBlue::ParrotNorwegianBlue(double voltage, bool isNailed) : voltage(voltage), isNailed(isNailed) {}

double ParrotNorwegianBlue::getSpeed()
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double ParrotNorwegianBlue::getBaseSpeed(double current_voltage) {
	return min(24.0, current_voltage * ParrotBase::getSpeed());
}

