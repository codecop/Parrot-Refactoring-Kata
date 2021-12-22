#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H

class IParrot
{
public:
	virtual double getSpeed() = 0;
};

class ParrotBase : public IParrot
{
protected:
	const double baseSpeed = 12.0;
public:
	virtual double getSpeed() override;
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
