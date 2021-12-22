#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE};

class Parrot {
public:
    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    double getSpeed();
private:
    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
    double getLoadFactor();
    double baseSpeed = 12.0;
};


#endif //PARROT_PARROT_H
