#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H

#include "Parrot.h"

class ParrotBase {
public:
    ParrotBase(ParrotType parrotType, bool isNailed);

private:
    ParrotType parrotType;
	bool isNailed;

protected:
    const double baseSpeed = 12.0;

};


#endif //PARROT_PARROT_H
