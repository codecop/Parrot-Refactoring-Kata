#include <stdexcept>
#include <algorithm>

#include "ParrotBase.h"

using namespace std;

ParrotBase::ParrotBase(ParrotType parrotType, double voltage, bool isNailed)
: parrotType(parrotType), voltage(voltage), isNailed(isNailed) {}


double ParrotBase::getSpeed() {
    switch (parrotType) {
        case NORWEGIAN_BLUE:
            return (isNailed) ? 0 : getBaseSpeed(voltage);
        default:
            throw std::invalid_argument("Should be unreachable");
    }
}

double ParrotBase::getBaseSpeed(double current_voltage) {
    return min(24.0, current_voltage * baseSpeed);
}