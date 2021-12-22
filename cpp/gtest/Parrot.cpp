#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(double voltage) {}


double Parrot::getBaseSpeed() {
    return 12.0;
}

EuropeanParrot::EuropeanParrot(double voltage, bool isNailed)
    : Parrot(voltage)
{

}
double EuropeanParrot::getSpeed() {
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(voltage), numberOfCoconuts(numberOfCoconuts)
{

}

double AfricanParrot::getSpeed() {
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrot::getLoadFactor() {
	return 9.0;
}


NorwegianBlueParrot::NorwegianBlueParrot(double voltage, bool isNailed) 
    : Parrot(voltage), isNailed(isNailed), voltage(voltage)
{

}

double NorwegianBlueParrot::getSpeed() {
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double NorwegianBlueParrot::getBaseSpeed(double current_voltage) {

	return min(24.0, current_voltage * Parrot::getBaseSpeed());
}
