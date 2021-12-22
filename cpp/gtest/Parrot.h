#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

enum ParrotType { NORWEGIAN_BLUE};

class IParrot
{
public:
	virtual double getSpeed();
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

class ParrotAfrican : public ParrotBase
{
	int numberOfCoconuts;
	double getLoadFactor();

public:
	ParrotAfrican(int numberOfCoconuts);
	virtual double getSpeed() override;
};

class ParrotNorwegianBlue : public ParrotBase {
public:
	ParrotNorwegianBlue(double voltage, bool isNailed);

	virtual double getSpeed();
private:
	double voltage;
	bool isNailed;

	double getBaseSpeed(double voltage);
};


class Parrot : public ParrotBase {
public:
    Parrot(ParrotType parrotType, double voltage, bool isNailed);

	virtual double getSpeed();
private:
    ParrotType parrotType;
    double voltage;
    bool isNailed;

	double getBaseSpeed(double voltage);
};


#endif //PARROT_PARROT_H
