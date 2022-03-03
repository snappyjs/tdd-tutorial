export class Calculator {

  private getAero(): number {
    return 0.1;
  }

  private getWeight(): number {
    return 2225;
  }

  private getRRc(): number {
    return 1;
  }

  public calculate(): number {
    return this.getAero() * this.getWeight() * this.getRRc();
  }
}
