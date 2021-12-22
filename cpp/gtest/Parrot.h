#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H


class Parrot {
public:
    Parrot() {};
    virtual double getSpeed() = 0;
protected:
    const double baseSpeed = 12.0;

};


#endif //PARROT_PARROT_H
