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

AfricanParrot::AfricanParrot(const int numberOfCoconuts)
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


NorwegianBlueParrot::NorwegianBlueParrot(const double voltage, const bool isNailed)
    : Parrot{}
    , voltage{ voltage }
    , isNailed{ isNailed }
{}

double NorwegianBlueParrot::getSpeed()
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double NorwegianBlueParrot::getBaseSpeed(const double current_voltage) {
    static constexpr double MaximumBaseSpeed = 24.0;
    return min(MaximumBaseSpeed, current_voltage * Parrot::getBaseSpeed());
}

