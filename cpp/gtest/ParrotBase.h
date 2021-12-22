#ifndef PARROTBASE_PARROT_H
#define PARROTBASE_PARROT_H


class ParrotBase {
public:
    ParrotBase();
    virtual double getSpeed() = 0;
protected:
    const double baseSpeed = 12.0;

};


#endif //PARROT_PARROT_H
