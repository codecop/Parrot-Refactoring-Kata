#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(int numberOfCoconuts, double voltage, bool isNailed) : numberOfCoconuts(numberOfCoconuts), voltage(voltage), isNailed(isNailed) {}


double Parrot::getBaseSpeed() {
    return 12.0;
}

double Parrot::getBaseSpeed(double current_voltage) {

    return min(24.0, current_voltage * getBaseSpeed());
}

EuropeanParrot::EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(numberOfCoconuts, voltage, isNailed)
{

}
double EuropeanParrot::getSpeed() {
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(numberOfCoconuts, voltage, isNailed)
{

}

double AfricanParrot::getSpeed() {
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrot::getLoadFactor() {
	return 9.0;
}


NorwegianBlueParrot::NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(numberOfCoconuts, voltage, isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}
