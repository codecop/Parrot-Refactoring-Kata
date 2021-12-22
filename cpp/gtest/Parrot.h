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

	virtual double getSpeed() override;
private:
	double voltage;
	bool isNailed;
};

#endif //PARROT_PARROT_H
