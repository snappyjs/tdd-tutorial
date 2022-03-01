import { Calculator } from "./Calculator";

describe(" --- Test Without TDD --- ", () => {
  let controller: Calculator;

  beforeEach(() => {
    controller = new Calculator();
  });

  it("should calculate co2.", () => {
    const res = controller.calculate();
    expect(res).toEqual(212.5);
  });
});
