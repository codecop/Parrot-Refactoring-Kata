#include <stdexcept>
#include <algorithm>

#include "Parrot.h"
#include "EuropeanParrot.h"
using namespace std;

EuropeanParrot::EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed)
: Parrot(EUROPEAN,numberOfCoconuts,voltage,isNailed) {}


double EuropeanParrot::getSpeed() {
            return baseSpeed;
}