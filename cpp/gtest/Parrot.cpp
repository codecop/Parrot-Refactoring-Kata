#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed)
    : parrotType(parrotType), numberOfCoconuts(numberOfCoconuts), voltage(voltage), isNailed(isNailed) {}


double Parrot::getBaseSpeed() {
    return 12.0;
}

double Parrot::getLoadFactor() {
    return 9.0;
}

double Parrot::getBaseSpeed(double current_voltage) {

    return min(24.0, current_voltage * getBaseSpeed());
}

EuropeanParrot::EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::EUROPEAN, numberOfCoconuts, voltage, isNailed)
{

}
double EuropeanParrot::getSpeed() {
    return getBaseSpeed();
}

AfricanParrot::AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::AFRICAN, numberOfCoconuts, voltage, isNailed)
{

}

double AfricanParrot::getSpeed() {
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

NorwegianBlueParrot::NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed)
    : Parrot(ParrotType::NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed)
{

}

double NorwegianBlueParrot::getSpeed() {
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}
