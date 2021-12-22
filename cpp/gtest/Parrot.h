#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE };

class Parrot
{
public:
    static Parrot* ParrotFactory(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed();
    virtual ParrotType GetParrotType() = 0;
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

    virtual ParrotType GetParrotType() override;
    virtual double getSpeed() override;
};

class AfricanParrot : public Parrot
{
public:
    AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed);

    virtual ParrotType GetParrotType() override;
    virtual double getSpeed() override;
};

class NorwegianBlueParrot : public Parrot
{
public:
    NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed);

    virtual ParrotType GetParrotType() override;
    virtual double getSpeed() override;
};

#endif //PARROT_PARROT_H
