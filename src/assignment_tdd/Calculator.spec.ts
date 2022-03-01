import {Aerodynamics} from "./Aerodynamics";
import {Calculator} from "./Calculator";
import {RollingResistance} from "./RollingResistance";
import {Weight} from "./Weight";

describe(' --- Test Driven Development --- ', () => {
  const aerodynamicDrag = 0.1;
  const weight = 2125;
  const rollingResistance = 1;
  const results = aerodynamicDrag * weight * rollingResistance;

  it('Should get the aerodynamic drag', () => {
    const aero = new Aerodynamics(aerodynamicDrag)
    expect(aero.getAero()).toEqual(aerodynamicDrag);
  })

  it('Should get the weight', () => {
    const weightDao = new Weight(weight);
    expect(weightDao.getWeight()).toEqual(weight);
  })

  it('Should get the rolling resistance', () => {
    const rrc = new RollingResistance(rollingResistance);
    expect(rrc.getRollingResistance()).toEqual(rollingResistance);
  })


  it('Should successfully calculate the co2', () => {
    const calculator = new Calculator(
      new Aerodynamics(aerodynamicDrag),
      new Weight(weight),
      new RollingResistance(rollingResistance)
    );

    const res = calculator.calculate();

    expect(res).toEqual(results);
  })

})
