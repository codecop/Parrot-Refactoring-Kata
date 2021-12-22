#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class Parrot {
public:
    Parrot() = default;
    virtual ~Parrot() = default;

    virtual double getSpeed() const = 0;

protected:
    double getBaseSpeed() const;

private:
    static constexpr double DefaultBaseSpeed = 12.0;
};

class EuropeanParrot
    : public Parrot
{
public:
    EuropeanParrot() = default;
    double getSpeed() const override;
};

class AfricanParrot
    : public Parrot
{
public:
    explicit AfricanParrot(int numberOfCoconuts);

    double getSpeed() const override;

private:
    static constexpr double DefaultLoadFactor = 9.0;
    int numberOfCoconuts;

    double getLoadFactor() const;
};

class NorwegianBlueParrot
    : public Parrot
{
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

    double getSpeed() const override;

private:
    double getBaseSpeed(double voltage) const;
    double voltage;
    bool isNailed;
};

#endif //PARROT_PARROT_H
