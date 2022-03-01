export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

class UnknownParrotError extends Error {
    constructor(type) {
        super(`Unknown parrot: ${type}`);
    }
}

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
                const africanParrot = new AfricanParrot(this.numberOfCoconuts);
                return africanParrot.getSpeed();
            case PARROT_TYPES.NORWEGIAN_BLUE:
                const norwegianBlueParrot = new NorwegianBlueParrot(this.voltage, this.isNailed);
                return norwegianBlueParrot.getSpeed();
        }
        this.handleUnknownParrot();
    }

    handleUnknownParrot() {
        throw new UnknownParrotError(this.type);
    }

    getBaseSpeed() {
        const baseSpeed = 12;
        return baseSpeed;
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

    constructor(numberOfCoconuts) {
        super(PARROT_TYPES.AFRICAN, numberOfCoconuts, undefined, undefined);
        this.loadFactor = 9;
        this.minimalSpeed = 0;
    }

    getSpeed() {
        return Math.max(0, this.getBaseSpeed() - this.loadFactor * this.numberOfCoconuts);
    }
}

class NorwegianBlueParrot extends Parrot {
    constructor(voltage, isNailed) {
        super(PARROT_TYPES.NORWEGIAN_BLUE, undefined, voltage, isNailed);
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }

    getBaseSpeedWithVoltage(voltage) {
        const minimalSpeedTreshold = 24;
        const actualSpeed = voltage * this.getBaseSpeed();
        const baseSpeed = Math.min(minimalSpeedTreshold, actualSpeed);
        return baseSpeed;
    }
}

