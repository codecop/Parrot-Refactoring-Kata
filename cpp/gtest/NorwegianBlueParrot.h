#ifndef NORWEGIANBLUEPARROT_PARROT_H
#define NORWEGIANBLUEPARROT_PARROT_H


#include "ParrotBase.h"

class NorwegianBlueParrot : public ParrotBase {
public:
    NorwegianBlueParrot(double voltage, bool isNailed): ParrotBase(NORWEGIAN_BLUE,voltage,isNailed) {};
};


#endif //NORWEGIANBLUEPARROT_PARROT_H
