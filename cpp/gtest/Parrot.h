#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { AFRICAN, NORWEGIAN_BLUE, DERIVED};

class Parrot {
public:
    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);
    virtual ~Parrot() = default;

    virtual double getSpeed();

protected:
    double getBaseSpeed();

private:
    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
};

class EuropeanParrot
    : public Parrot
{
public:
    EuropeanParrot()
        : Parrot{ DERIVED, 0, 0., false }
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


#endif //PARROT_PARROT_H
