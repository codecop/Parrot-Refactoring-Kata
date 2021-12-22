#include <stdexcept>
#include <algorithm>

#include "ParrotBase.h"
#include "AfricanParrot.h"
using namespace std;

AfricanParrot::AfricanParrot(int numberOfCoconuts)
: ParrotBase(), numberOfCoconuts(numberOfCoconuts) {}



double AfricanParrot::getSpeed() {
	return max(0.0, baseSpeed - loadFactor * numberOfCoconuts);
}