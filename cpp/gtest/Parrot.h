#ifndef PARROT_PARROT_H
#define PARROT_PARROT_H


class Parrot {
public:
	Parrot() = default;
	virtual double getSpeed() = 0;
protected:
	const double baseSpeed = 12.0;

};


#endif //PARROT_PARROT_H
