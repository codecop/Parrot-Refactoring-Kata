#include <stdexcept>
#include <algorithm>

#include "ParrotBase.h"

using namespace std;

ParrotBase::ParrotBase(ParrotType parrotType,  bool isNailed)
: parrotType(parrotType),  isNailed(isNailed) {}


