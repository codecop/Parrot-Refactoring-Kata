#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE };

class Parrot
{
public:
    static Parrot* ParrotFactory(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    double getSpeed();
    ParrotType GetParrotType();
protected:
    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
    double getLoadFactor();
    double getBaseSpeed();

};

class EuropeanParrot : public Parrot
{
public:
    EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed);
};

class AfricanParrot : public Parrot
{
public:
    AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed);
};

class NorwegianBlueParrot : public Parrot
{
public:
    NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed);
};

#endif //PARROT_PARROT_H
