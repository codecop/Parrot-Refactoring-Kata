#include <stdexcept>
#include <algorithm>

#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot()
	: Parrot() {}


double EuropeanParrot::getSpeed() {
	return baseSpeed;
}