#include <stdexcept>
#include <algorithm>

#include "EuropeanParrot.h"

EuropeanParrot::EuropeanParrot()
	: Parrot() {}


double EuropeanParrot::getSpeed() {
	return baseSpeed;
}