#ifndef NORWEGIANBLUEPARROT_PARROT_H
#define NORWEGIANBLUEPARROT_PARROT_H


#include "Parrot.h"

class NorwegianBlueParrot : public Parrot {
public:
	NorwegianBlueParrot(double voltage, bool isNailed);

	double getSpeed() override;

private:
	double voltage;
	bool isNailed;
};


#endif //NORWEGIANBLUEPARROT_PARROT_H
