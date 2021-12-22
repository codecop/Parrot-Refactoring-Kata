#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed)
: parrotType(parrotType), numberOfCoconuts(numberOfCoconuts), voltage(voltage), isNailed(isNailed) {}

Parrot* Parrot::ParrotFactory(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed)
{
    switch (parrotType)
    {
    case EUROPEAN:
        return new EuropeanParrot(numberOfCoconuts, voltage, isNailed);
    case AFRICAN:
        return new AfricanParrot(numberOfCoconuts, voltage, isNailed);
    case NORWEGIAN_BLUE:
        return new NorwegianBlueParrot(numberOfCoconuts, voltage, isNailed);
    default:
        throw std::invalid_argument("Should be unreachable");
    }
}

double Parrot::getBaseSpeed()
{
    return 12.0;
}

double Parrot::getLoadFactor()
{
    return 9.0;
}

double Parrot::getBaseSpeed(double current_voltage)
{
    return min(24.0, current_voltage * getBaseSpeed());
}

EuropeanParrot::EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::EUROPEAN, numberOfCoconuts, voltage, isNailed){}

ParrotType EuropeanParrot::GetParrotType()
{
    return ParrotType::EUROPEAN;
}

double EuropeanParrot::getSpeed()
{
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::AFRICAN, numberOfCoconuts, voltage, isNailed) {}

ParrotType AfricanParrot::GetParrotType()
{
    return ParrotType::AFRICAN;
}

double AfricanParrot::getSpeed()
{
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

NorwegianBlueParrot::NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed) {}

ParrotType NorwegianBlueParrot::GetParrotType()
{
    return ParrotType::NORWEGIAN_BLUE;
}

double NorwegianBlueParrot::getSpeed()
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}