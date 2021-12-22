#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot()
: ParrotBase(EUROPEAN,0,false) {}


double EuropeanParrot::getSpeed() {
            return baseSpeed;
}