#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot()
: ParrotBase() {}


double EuropeanParrot::getSpeed() {
            return baseSpeed;
}