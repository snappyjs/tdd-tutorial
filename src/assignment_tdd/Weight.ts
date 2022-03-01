import {WeightDao} from "./WeightDao";


export class Weight implements WeightDao {

  constructor(private value: number) {}

  getWeight(): number {
    return this.value;
  }



}
