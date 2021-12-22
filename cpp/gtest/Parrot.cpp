#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

double Parrot::getBaseSpeed() {
    return DefaultBaseSpeed;
}


double EuropeanParrot::getSpeed()
{
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts)
    : Parrot{}
    , numberOfCoconuts{ numberOfCoconuts }
{}

double AfricanParrot::getSpeed()
{
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrot::getLoadFactor() {
    return DefaultLoadFactor;
}


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed)
    : Parrot{}
    , voltage{ voltage }
    , isNailed{ isNailed }
{}

double NorwegianBlueParrot::getSpeed()
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double NorwegianBlueParrot::getBaseSpeed(double current_voltage) {
    return min(24.0, current_voltage * Parrot::getBaseSpeed());
}

