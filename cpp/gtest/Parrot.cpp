#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(double voltage, bool isNailed) : voltage(voltage), isNailed(isNailed) {}


double Parrot::getBaseSpeed() {
    return 12.0;
}

double Parrot::getBaseSpeed(double current_voltage) {

    return min(24.0, current_voltage * getBaseSpeed());
}

EuropeanParrot::EuropeanParrot(double voltage, bool isNailed)
    : Parrot(voltage, isNailed)
{

}
double EuropeanParrot::getSpeed() {
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(voltage, isNailed), numberOfCoconuts(numberOfCoconuts)
{

}

double AfricanParrot::getSpeed() {
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrot::getLoadFactor() {
	return 9.0;
}


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) : Parrot(voltage, isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}
