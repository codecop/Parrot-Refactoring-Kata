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

double ParrotAfrican::getLoadFactor()
{
	return 9.0;
}

ParrotAfrican::ParrotAfrican(int numberOfCoconuts) : numberOfCoconuts(numberOfCoconuts) {}

double ParrotAfrican::getSpeed()
{
    return max(0.0, baseSpeed - getLoadFactor() * numberOfCoconuts);
}

ParrotNorwegianBlue::ParrotNorwegianBlue(double voltage, bool isNailed) : voltage(voltage), isNailed(isNailed) {}

double ParrotNorwegianBlue::getSpeed()
{
    return (isNailed) ? 0 : min(24.0, voltage * baseSpeed);
}

double ParrotEuropean::getSpeed()
{
	return baseSpeed;
}
