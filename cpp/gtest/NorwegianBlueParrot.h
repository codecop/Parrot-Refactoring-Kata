#ifndef NORWEGIANBLUEPARROT_PARROT_H
#define NORWEGIANBLUEPARROT_PARROT_H


#include "ParrotBase.h"

class NorwegianBlueParrot : public ParrotBase {
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

	virtual double getSpeed() override;

private:
	double getBaseSpeed2(double voltage);

	double voltage;
	bool isNailed;
};


#endif //NORWEGIANBLUEPARROT_PARROT_H
