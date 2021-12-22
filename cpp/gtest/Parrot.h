#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE };

class Parrot
{
public:
    static Parrot* ParrotFactory(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    double getSpeed();
    ParrotType GetParrotType();
private:
    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
    double getLoadFactor();
    double getBaseSpeed();

};


#endif //PARROT_PARROT_H
