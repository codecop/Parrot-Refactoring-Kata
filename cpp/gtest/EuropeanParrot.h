#ifndef EUROPEANPARROT_PARROT_H
#define EUROPEANPARROT_PARROT_H

#include "ParrotBase.h"

class EuropeanParrot : public ParrotBase {
public:
    EuropeanParrot();

    virtual double getSpeed() override;
};


#endif //PARROT_PARROT_H
