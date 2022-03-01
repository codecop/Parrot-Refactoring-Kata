export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {

    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {
            case PARROT_TYPES.EUROPEAN:
                const europeanParrot = new EuropeanParrot();
                return europeanParrot.getSpeed();
            case PARROT_TYPES.AFRICAN:
                return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
            case PARROT_TYPES.NORWEGIAN_BLUE:
                return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
        }
        throw new Error("Should be unreachable");
    }

    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.getBaseSpeed());
    }

    getLoadFactor() {
        return 9;
    }

    getBaseSpeed() {
        return 12;
    }
}

class EuropeanParrot extends Parrot {
    constructor() {
        super(PARROT_TYPES.EUROPEAN, undefined, undefined, undefined);
    }

    getSpeed() {
        return super.getBaseSpeed();
    }
}

class AfricanParrot extends Parrot {
    constructor(numberOfCoconuts, isNailed) {
        super(PARROT_TYPES.AFRICAN, numberOfCoconuts, undefined, isNailed);
    }
}

