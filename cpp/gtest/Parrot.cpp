#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed)
: parrotType(parrotType), numberOfCoconuts(numberOfCoconuts), voltage(voltage), isNailed(isNailed) {}

double Parrot::getBaseSpeed() {
    return 12.0;
}

double Parrot::getBaseSpeed(double current_voltage) {
    return min(24.0, current_voltage * getBaseSpeed());
}


double EuropeanParrot::getSpeed()
{
    return getBaseSpeed();
}


AfricanParrot::AfricanParrot(int numberOfCoconuts)
    : Parrot{DERIVED, numberOfCoconuts, 0., false}
    , numberOfCoconuts{ numberOfCoconuts }
{}

double AfricanParrot::getSpeed()
{
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrot::getLoadFactor() {
    return 9.0;
}

double NorwegianBlueParrot::getSpeed()
{
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}
