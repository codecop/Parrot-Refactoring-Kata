export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  protected numberOfCoconuts: number;
  protected voltage: number;
  protected isNailed: boolean;

  protected BASE_SPEED = 12;
  protected LOAD_FACTOR = 9;
  protected MIN_SPEED = 0;

  constructor(
    numberOfCoconuts: number,
    voltage: number,
    isNailed: boolean
  ) {
    this.numberOfCoconuts = numberOfCoconuts;
    this.voltage = voltage;
    this.isNailed = isNailed;
  }
}

export class EuropeanParrot extends Parrot {
  constructor() {
    super(0, 0, false);
  }

  public getSpeed(): number {
    return this.BASE_SPEED;
  }
}

export class AfricanParrot extends Parrot {
  constructor(numberOfCoconuts: number) {
    super(numberOfCoconuts, 0, false);
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
    super(0, voltage, isNailed);
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
