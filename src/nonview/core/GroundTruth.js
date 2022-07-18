import DictUtils from "../../nonview/base/DictUtils";
import {
  ATTR_IDX_HLIYAN,
  ATTR_IDX_NUUUWAN,
} from "../../nonview/core/GroundTruthRawData";

import MathX from "../../nonview/base/MathX";
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

  static getCriterionToCandidateToWeight(version) {
    return ATTR_IDX_IDX[version];
  }

  static getCriteria(version) {
    return Object.keys(GroundTruth.getCriterionToCandidateToWeight(version));
  }

  static getInitCriterionWeights(version) {
    const criteria = GroundTruth.getCriteria(version);
    return criteria.map(function (criterion) {
      return 0;
    });
  }

  static getTotalWeight(criterionWeights) {
    return MathX.sumL1(criterionWeights);
  }

  static getCandidateToScore(version, criterionWeights) {
    const totalWeight = GroundTruth.getTotalWeight(criterionWeights);
    const critToCandToWeight =
      GroundTruth.getCriterionToCandidateToWeight(version);
    return Object.entries(critToCandToWeight).reduce(function (
      candToScore,
      [crit, candToWeight],
      iCrit
    ) {
      return Object.entries(candToWeight).reduce(function (
        candToScore,
        [cand, weight]
      ) {
        if (!candToScore[cand]) {
          candToScore[cand] = 0;
        }
        candToScore[cand] += (criterionWeights[iCrit] * weight) / totalWeight;
        return candToScore;
      },
      candToScore);
    },
    {});
  }
}
