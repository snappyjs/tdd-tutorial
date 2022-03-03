import { Calculator } from "./Calculator";

describe(" --- Test Without TDD --- ", () => {
  let controller: Calculator;

  beforeEach(() => {
    controller = new Calculator();
  });

  it("should calculat the co2 number.", () => {
    expect(controller.calculate()).toEqual(222.5);
  });
});
