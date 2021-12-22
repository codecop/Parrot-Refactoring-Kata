#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot()
: Parrot(EUROPEAN,0,0,false) {}


double EuropeanParrot::getSpeed() {
            return baseSpeed;
}