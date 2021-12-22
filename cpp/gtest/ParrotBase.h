#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H

#include "Parrot.h"

class ParrotBase {
public:
    ParrotBase(ParrotType parrotType, double voltage, bool isNailed);

    virtual double getSpeed();
private:
    ParrotType parrotType;
	double voltage;
	bool isNailed;
    double getBaseSpeed(double voltage);

protected:
    const double baseSpeed = 12.0;

};


#endif //PARROT_PARROT_H
