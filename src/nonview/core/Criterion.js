import { CRITERION_D_LIST } from "../data/CRITERION_D_LIST";
import IDX from "../../nonview/base/IDX";

export default class Criterion {
  constructor(id, details) {
    this.id = id;
    this.details = details;
  }
  static fromDict(d) {
    return new Criterion(d.id, d.details);
  }

  static fromID(id) {
    return CRITERION_IDX[id];
  }
}

export const CRITERION_LIST = CRITERION_D_LIST.map((d) =>
  Criterion.fromDict(d)
).sort((a, b) => a.id.localeCompare(b.id));

export const CRITERION_IDX = IDX.build(
  CRITERION_LIST,
  (x) => x.id,
  (x) => x
);

export const CRITERION_IDS = Object.keys(CRITERION_IDX);
