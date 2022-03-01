import {AerodynamicsDao} from "./AerodynamicsDao";
import {RollingResistanceDao} from "./RollingResistanceDao";
import {WeightDao} from "./WeightDao";

export class Calculator {

  constructor(private aero: AerodynamicsDao, private weight: WeightDao, private rrc: RollingResistanceDao) {}


  public calculate(): number {
    return this.aero.getAero() * this.weight.getWeight() * this.rrc.getRollingResistance();
  }

}
