#ifndef NORWEGIANBLUEPARROT_PARROT_H
#define NORWEGIANBLUEPARROT_PARROT_H


#include "ParrotBase.h"

class NorwegianBlueParrot : public ParrotBase {
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

	virtual double getSpeed();

private:
	double getBaseSpeed(double voltage);

	double voltage;
	bool isNailed;
};


#endif //NORWEGIANBLUEPARROT_PARROT_H
