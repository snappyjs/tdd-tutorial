import { Calculator } from "./Calculator";

describe(" --- Test Without TDD --- ", () => {
  let controller: Calculator;

  beforeEach(() => {
    controller = new Calculator();
  });

  it("should just work", () => {
    expect(controller).toBeTruthy();
  });
});
