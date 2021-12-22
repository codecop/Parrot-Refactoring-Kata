#include <stdexcept>
#include <algorithm>

#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot()
: ParrotBase() {}


double EuropeanParrot::getSpeed() {
            return baseSpeed;
}