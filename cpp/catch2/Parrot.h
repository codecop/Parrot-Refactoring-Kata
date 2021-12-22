#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE};

class IParrot
{
public:
    virtual double getSpeed() = 0;
};

class Parrot : IParrot {
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
    double getBaseSpeed();
};


#endif //PARROT_PARROT_H
