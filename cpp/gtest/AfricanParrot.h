#ifndef AFRICANPARROT_PARROT_H
#define AFRICANPARROT_PARROT_H

#include "ParrotBase.h"

class AfricanParrot : public ParrotBase {
public:
    AfricanParrot(int numberOfCoconuts) ;

    virtual double getSpeed() override;
private:
	const double loadFactor = 9.0;
};


#endif //PARROT_PARROT_H
