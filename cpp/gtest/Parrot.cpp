#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;

Parrot::Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed)
: parrotType(parrotType), numberOfCoconuts(numberOfCoconuts), voltage(voltage), isNailed(isNailed) {}

double Parrot::getSpeed() {
    switch (parrotType) {
        case EUROPEAN:
            return ParrotBase::getSpeed();
        case AFRICAN:
            return max(0.0, ParrotBase::getSpeed() - getLoadFactor() * numberOfCoconuts);
        case NORWEGIAN_BLUE:
            return (isNailed) ? 0 : getBaseSpeed(voltage);
        default:
            throw std::invalid_argument("Should be unreachable");
    }
}

double Parrot::getLoadFactor() {
    return 9.0;
}

double Parrot::getBaseSpeed(double current_voltage) {
    return min(24.0, current_voltage * ParrotBase::getSpeed());
}

double ParrotBase::getSpeed()
{
	return 12.0;
}

double ParrotEuropean::getSpeed()
{
    return ParrotBase::getSpeed();
}

ParrotAfrican::ParrotAfrican(int numberOfCoconuts) : numberOfCoconuts(numberOfCoconuts)
{

}

double ParrotAfrican::getSpeed()
{
    return max(0.0, ParrotBase::getSpeed() - getLoadFactor() * numberOfCoconuts);
}
