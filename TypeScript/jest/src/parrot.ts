export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  private parrotType: ParrotTypes;
  protected numberOfCoconuts: number;
  private voltage: number;
  private isNailed: boolean;

  protected BASE_SPEED = 12;
  protected LOAD_FACTOR = 9;
  protected MIN_SPEED = 0;

  constructor(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    isNailed: boolean
  ) {
    this.parrotType = parrotType;
    this.numberOfCoconuts = numberOfCoconuts;
    this.voltage = voltage;
    this.isNailed = isNailed;
  }

  public getSpeed(): number {
    switch (this.parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot().getSpeed();
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(this.numberOfCoconuts).getSpeed();
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.isNailed
          ? this.MIN_SPEED
          : this.getBaseSpeedWithVoltage(this.voltage);
    }
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.BASE_SPEED);
  }
}

class EuropeanParrot extends Parrot {
  constructor() {
    super(ParrotTypes.EUROPEAN, 0, 0, false);
  }

  public getSpeed(): number {
    return this.BASE_SPEED;
  }
}

class AfricanParrot extends Parrot {
  constructor(numberOfCoconuts: number) {
    super(ParrotTypes.AFRICAN, numberOfCoconuts, 0, false);
  }

  public getSpeed(): number {
    return Math.max(
      this.MIN_SPEED,
      this.BASE_SPEED - this.LOAD_FACTOR * this.numberOfCoconuts
    );
  }
}

class NorwegianBlueParrot extends Parrot {
  constructor() {
    super(ParrotTypes.NORWEGIAN_BLUE, 0, 0, false);
  }
}
