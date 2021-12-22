#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

double Parrot::getBaseSpeed() const {
    return DefaultBaseSpeed;
}

double EuropeanParrot::getSpeed() const
{
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(const int numberOfCoconuts)
    : Parrot{}
    , numberOfCoconuts{ numberOfCoconuts }
{}

double AfricanParrot::getSpeed() const
{
    const double coconutSlowDown = getLoadFactor() * numberOfCoconuts;
    return max(0.0, getBaseSpeed() - coconutSlowDown);
}

double AfricanParrot::getLoadFactor() const {
    return DefaultLoadFactor;
}

NorwegianBlueParrot::NorwegianBlueParrot(const double voltage, const bool isNailed)
    : Parrot{}
    , voltage{ voltage }
    , isNailed{ isNailed }
{}

double NorwegianBlueParrot::getSpeed() const
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double NorwegianBlueParrot::getBaseSpeed(const double currentVoltage) const {
    static constexpr double MaximumBaseSpeed = 24.0;
    return min(MaximumBaseSpeed, currentVoltage * Parrot::getBaseSpeed());
}

