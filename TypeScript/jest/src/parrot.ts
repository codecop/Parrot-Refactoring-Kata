export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  private parrotType: ParrotTypes;
  protected numberOfCoconuts: number;
  protected voltage: number;
  protected isNailed: boolean;

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
        return new NorwegianBlueParrot(this.voltage, this.isNailed).getSpeed();
    }
  }

  protected getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.BASE_SPEED);
  }
}

export class EuropeanParrot extends Parrot {
  constructor() {
    super(ParrotTypes.EUROPEAN, 0, 0, false);
  }

  public getSpeed(): number {
    return this.BASE_SPEED;
  }
}

export class AfricanParrot extends Parrot {
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

export class NorwegianBlueParrot extends Parrot {
  constructor(voltage: number, isNailed: boolean) {
    super(ParrotTypes.NORWEGIAN_BLUE, 0, voltage, isNailed);
  }

  public getSpeed(): number {
    return this.isNailed
      ? this.MIN_SPEED
      : this.getBaseSpeedWithVoltage(this.voltage);
  }

  protected getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.BASE_SPEED);
  }
}
