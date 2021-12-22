#ifndef AFRICANPARROT_PARROT_H
#define AFRICANPARROT_PARROT_H

#include "Parrot.h"

class AfricanParrot : public Parrot {
public:
	AfricanParrot(int numberOfCoconuts);

	double getSpeed();
private:
	const double loadFactor = 9.0;
	int numberOfCoconuts;
};


#endif //PARROT_PARROT_H
