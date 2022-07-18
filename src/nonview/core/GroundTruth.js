import DictUtils from "../../nonview/base/DictUtils";
import {
  ATTR_IDX_HLIYAN,
  ATTR_IDX_NUUUWAN,
} from "../../nonview/core/GroundTruthRawData";

const ATTR_IDX_IDX = Object({
  "@h_liyan": ATTR_IDX_HLIYAN,
  "@nuuuwan": ATTR_IDX_NUUUWAN,
  "@nuuuwan - Economic Factors": DictUtils.filterDict(ATTR_IDX_NUUUWAN, [
    "Economic Experience at the National Level",
    "Will work with the IMF",
  ]),
  "@nuuuwan - Constituitional Factors": DictUtils.filterDict(ATTR_IDX_NUUUWAN, [
    "Voted for 20A",
    "Will support abolishing the Executive Presidency while in seat",
    "Will support bringing back 19A",
  ]),
});

const VERSIONS = Object.keys(ATTR_IDX_IDX);

export default class GroundTruth {
  static DEFAULT_VERSION = VERSIONS[0];

  static getCriteria(version) {
    return Object.keys(ATTR_IDX_IDX[version]);
  }

  static getInitCriterionWeights(version) {
    const criteria = GroundTruth.getCriteria(version);
    return criteria.map(function (criterion) {
      return 0;
    });
  }
}
