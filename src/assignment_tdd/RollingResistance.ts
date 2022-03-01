import {RollingResistanceDao} from "./RollingResistanceDao";


export class RollingResistance implements RollingResistanceDao {

  constructor(private value: number) {}

  getRollingResistance(): number {
    return this.value;
  }

}
