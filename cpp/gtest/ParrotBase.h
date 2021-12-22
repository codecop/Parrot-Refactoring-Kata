#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H

#include "Parrot.h"

class ParrotBase {
public:
    ParrotBase(ParrotType parrotType, double voltage, bool isNailed);

    virtual double getSpeed();
private:
    ParrotType parrotType;

    double getBaseSpeed(double voltage);
protected:
    const double baseSpeed = 12.0;
	double voltage;
	bool isNailed;
};


#endif //PARROT_PARROT_H
