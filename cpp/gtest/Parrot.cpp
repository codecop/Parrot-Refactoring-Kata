#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

double ParrotBase::getSpeed()
{
	throw std::invalid_argument("Should be unreachable");
}

ParrotAfrican::ParrotAfrican(int numberOfCoconuts) : numberOfCoconuts(numberOfCoconuts) {}

double ParrotAfrican::getSpeed()
{
    return max(0.0, baseSpeed - loadFactor * numberOfCoconuts);
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
