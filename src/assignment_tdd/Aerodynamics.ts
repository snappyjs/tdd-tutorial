import {AerodynamicsDao} from "./AerodynamicsDao";


export class Aerodynamics implements AerodynamicsDao {

  constructor(private value : number) { }

  public getAero() {
    return this.value;
  }

}
