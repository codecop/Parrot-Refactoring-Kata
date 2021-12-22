#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { DERIVED};

class Parrot {
public:
    Parrot() = default;
    virtual ~Parrot() = default;

    virtual double getSpeed() = 0;

protected:
    double getBaseSpeed();

private:
    ParrotType parrotType{ DERIVED };
    int numberOfCoconuts{ 0 };
    double voltage{ 0. };
    bool isNailed{ false };

};

class EuropeanParrot
    : public Parrot
{
public:
    EuropeanParrot()
        : Parrot{}
    {}

    double getSpeed() override;
};

class AfricanParrot
    : public Parrot
{
public:
    AfricanParrot(int numberOfCoconuts);

    double getSpeed() override;

private:
    int numberOfCoconuts;

    double getLoadFactor();
};

class NorwegianBlueParrot
    : public Parrot
{
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

    double getSpeed() override;

private:
    double getBaseSpeed(double voltage);
    double voltage;
    bool isNailed;
};

#endif //PARROT_PARROT_H
