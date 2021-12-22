export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  private parrotType: ParrotTypes;
  private numberOfCoconuts: number;
  private voltage: number;
  private isNailed: boolean;

  private BASE_SPEED = 12;
  protected LOAD_FACTOR = 9;
  private MIN_SPEED = 0;

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
        return this.BASE_SPEED;
      case ParrotTypes.AFRICAN:
        return Math.max(
          this.MIN_SPEED,
          this.BASE_SPEED - this.LOAD_FACTOR * this.numberOfCoconuts
        );
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.isNailed ? this.MIN_SPEED : this.getBaseSpeedWithVoltage(this.voltage);
    }
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.BASE_SPEED);
  }
}