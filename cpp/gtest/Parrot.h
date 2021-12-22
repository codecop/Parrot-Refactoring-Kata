#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class Parrot {
public:
	virtual double getSpeed() = 0;

protected:

    Parrot(int numberOfCoconuts, double voltage, bool isNailed);

	int numberOfCoconuts;

	double getBaseSpeed();

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
private:
	double getLoadFactor();
};

class NorwegianBlueParrot : public Parrot {
public:
    NorwegianBlueParrot(int numberOfCoconuts, double voltage, bool isNailed);

	virtual double getSpeed() override;
};

#endif //PARROT_PARROT_H
