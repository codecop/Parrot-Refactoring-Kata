#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class Parrot {
public:
	virtual double getSpeed() = 0;

protected:

    Parrot();

	double getBaseSpeed();


};

class EuropeanParrot : public Parrot {
public:
    EuropeanParrot(double voltage);

    virtual double getSpeed() override;
};

class AfricanParrot : public Parrot {
public:
    AfricanParrot(int numberOfCoconuts, double voltage);

    virtual double getSpeed() override;
private:
	int numberOfCoconuts;
	double getLoadFactor();
};

class NorwegianBlueParrot : public Parrot {
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

	virtual double getSpeed() override;
private:
	bool isNailed;
	double voltage;

	double getBaseSpeed(double voltage);
};

#endif //PARROT_PARROT_H
