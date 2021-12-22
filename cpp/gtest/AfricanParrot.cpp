#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "AfricanParrot.h"
using namespace std;

AfricanParrot::AfricanParrot(int numberOfCoconuts)
: Parrot(), numberOfCoconuts(numberOfCoconuts) {}



double AfricanParrot::getSpeed() {
	return max(0.0, baseSpeed - loadFactor * numberOfCoconuts);
}