#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class Parrot {
public:
	virtual double getSpeed();
protected:

	enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE };

    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

	int numberOfCoconuts;

	double getBaseSpeed();
	double getLoadFactor();

private:
    ParrotType parrotType;
    double voltage;
    bool isNailed;

    double getBaseSpeed(double voltage);
};

class EuropeanParrot : public Parrot {
public:
    EuropeanParrot(int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed() override;
};

class AfricanParrot : public Parrot {
public:
    AfricanParrot(int numberOfCoconuts, double voltage, bool isNailed);

    virtual double getSpeed() override;
};

class NorwegianBlueParrot : public Parrot {
public:
    NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed);
};

#endif //PARROT_PARROT_H
