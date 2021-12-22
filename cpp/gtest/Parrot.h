#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { EUROPEAN, AFRICAN, NORWEGIAN_BLUE};

class IParrot
{
public:
	virtual double getSpeed() = 0;
};

class ParrotBase : public IParrot
{
public:
	virtual double getSpeed();
};

class ParrotEuropean : public ParrotBase
{
public:
	virtual double getSpeed() override;
};

class Parrot : public ParrotBase {
public:
    Parrot(ParrotType parrotType, int numberOfCoconuts, double voltage, bool isNailed);

	virtual double getSpeed();
private:
    ParrotType parrotType;
    int numberOfCoconuts;
    double voltage;
    bool isNailed;

	double getBaseSpeed(double voltage);
    double getLoadFactor();
};


#endif //PARROT_PARROT_H
