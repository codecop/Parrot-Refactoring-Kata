#ifndef EUROPEANPARROT_PARROT_H
#define EUROPEANPARROT_PARROT_H

#include "Parrot.h"

class EuropeanParrot : public Parrot {
public:
    EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed() override;
};


#endif //PARROT_PARROT_H
