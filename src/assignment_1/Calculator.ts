export class Calculator {

  public calculate() : number {
    return this.getAero() * this.getRrc() * this.getWeight();
  }

  private getAero() : number {
    return 0.1;
  }

  private getRrc() : number {
    return 1.0;
  }

  private getWeight() : number {
    return 2125;
  }

}
