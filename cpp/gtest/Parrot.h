#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class SpeedStrategy {
public:
	virtual double getSpeed() = 0;

protected:
	double getBaseSpeed();

};

class EuropeanParrot : public SpeedStrategy {
public:
    EuropeanParrot();

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

#endif //PARROT_PARROT_H
