#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE};

class ParrotBase {
public:
    ParrotBase(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed();
private:
    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
    const double loadFactor = 9.0;
protected:
    const double baseSpeed = 12.0;
};


#endif //PARROT_PARROT_H
