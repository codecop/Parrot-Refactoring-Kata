#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "AfricanParrot.h"

AfricanParrot::AfricanParrot(int numberOfCoconuts)
: Parrot(), numberOfCoconuts(numberOfCoconuts) {}



double AfricanParrot::getSpeed() {
	return std::max(0.0, baseSpeed - loadFactor * numberOfCoconuts);
}