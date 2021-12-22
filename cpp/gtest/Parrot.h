#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class SpeedStrategy {
public:
	virtual double getSpeed() = 0;

protected:
	double getBaseSpeed();

};

class EuropeanParrotStrategy : public SpeedStrategy {
public:
    EuropeanParrotStrategy();

    virtual double getSpeed() override;
};

class AfricanParrot : public SpeedStrategy {
public:
    AfricanParrot(int numberOfCoconuts);

    virtual double getSpeed() override;
private:
	int numberOfCoconuts;
	double getLoadFactor();
};

class NorwegianBlueParrot : public SpeedStrategy {
public:
    NorwegianBlueParrot(double voltage, bool isNailed);

	virtual double getSpeed() override;
private:
	bool isNailed;
	double voltage;

	double getBaseSpeed(double voltage);
};


class Parrot {
public:
	Parrot(SpeedStrategy* speedStrategy);
};


#endif //PARROT_PARROT_H
