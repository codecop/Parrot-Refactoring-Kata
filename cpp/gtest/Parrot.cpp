#include <stdexcept>
#include <algorithm>

#include "Parrot.h"

using namespace std;


double SpeedStrategy::getBaseSpeed() {
    return 12.0;
}

EuropeanParrotStrategy::EuropeanParrotStrategy()
{

}
double EuropeanParrotStrategy::getSpeed() {
    return getBaseSpeed();
}

AfricanParrotStrategy::AfricanParrotStrategy(int numberOfCoconuts) 
    : numberOfCoconuts(numberOfCoconuts)
{

}

double AfricanParrotStrategy::getSpeed() {
    return max(0.0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts);
}

double AfricanParrotStrategy::getLoadFactor() {
	return 9.0;
}


NorwegianBlueParrotStrategy::NorwegianBlueParrotStrategy(double voltage, bool isNailed) 
    : isNailed(isNailed), voltage(voltage)
{

}

double NorwegianBlueParrotStrategy::getSpeed() {
    return (isNailed) ? 0 : getBaseSpeed(voltage);
}

double NorwegianBlueParrotStrategy::getBaseSpeed(double current_voltage) {

	return min(24.0, current_voltage * SpeedStrategy::getBaseSpeed());
}
