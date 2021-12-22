#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H

#include "Parrot.h"

class ParrotBase {
public:
    ParrotBase(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed();
private:
    ParrotType parrotType;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
protected:
    const double baseSpeed = 12.0;
	const double loadFactor = 9.0;
	int numberOfCoconuts;
};


#endif //PARROT_PARROT_H
