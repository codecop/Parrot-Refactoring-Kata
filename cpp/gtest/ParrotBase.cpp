#include <stdexcept>
#include <algorithm>

#include "ParrotBase.h"

using namespace std;

ParrotBase::ParrotBase(ParrotType parrotType, double voltage, bool isNailed)
: parrotType(parrotType), voltage(voltage), isNailed(isNailed) {}


