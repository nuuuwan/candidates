import { CRITERION_TO_CANDIDATE_TO_WEIGHT } from "../../nonview/data/CRITERION_TO_CANDIDATE_TO_WEIGHT";

import MathX from "../../nonview/base/MathX";
const ATTR_IDX_IDX = Object({
  default: CRITERION_TO_CANDIDATE_TO_WEIGHT,
});

export default class GroundTruth {
  static VERSIONS = Object.keys(ATTR_IDX_IDX);
  static DEFAULT_VERSION = GroundTruth.VERSIONS[0];

  static getVersions() {
    return GroundTruth.VERSIONS;
  }

  static getCriterionToCandidateToWeightInfo(version) {
    if (!ATTR_IDX_IDX[version]) {
      version = GroundTruth.DEFAULT_VERSION;
    }
    return ATTR_IDX_IDX[version];
  }

  static getCriterionIDs(version) {
    return Object.keys(
      GroundTruth.getCriterionToCandidateToWeightInfo(version)
    );
  }

  static getGenericCriterionToWeight(version, funcGenerateWeight) {
    const criterionIDs = GroundTruth.getCriterionIDs(version);
    return Object.fromEntries(
      criterionIDs.map(function (criterionID) {
        return [criterionID, funcGenerateWeight(criterionID)];
      })
    );
  }

  static getInitCriterionWeights(version) {
    return GroundTruth.getGenericCriterionToWeight(version, (criterionID) => 0);
  }

  static getRandomWeight() {
    return parseInt(Math.random() * 200 - 100);
  }

  static getRandomCriterionWeights(version) {
    return GroundTruth.getGenericCriterionToWeight(version, (criterionID) =>
      GroundTruth.getRandomWeight()
    );
  }

  static getTotalWeight(criterionToWeight) {
    return MathX.sumL1(Object.values(criterionToWeight));
  }

  static getCandidateToScore(version, criterionToWeight) {
    let totalWeight = GroundTruth.getTotalWeight(criterionToWeight);
    if (totalWeight === 0) {
      totalWeight = 1;
    }
    const critToCandToWeightInfo =
      GroundTruth.getCriterionToCandidateToWeightInfo(version);

    return Object.entries(critToCandToWeightInfo).reduce(function (
      candToScore,
      [criterionID, candToWeightInfo]
    ) {
      return Object.entries(candToWeightInfo).reduce(function (
        candToScore,
        [cand, weightInfo]
      ) {
        if (!candToScore[cand]) {
          candToScore[cand] = 0;
        }
        candToScore[cand] +=
          (criterionToWeight[criterionID] * weightInfo.weight) / totalWeight;
        return candToScore;
      },
      candToScore);
    },
    {});
  }

  static getSortedCandidateWeightAndRank(version, criterionToWeight) {
    let prevWeight = undefined;
    let prevRank = undefined;
    return Object.entries(
      GroundTruth.getCandidateToScore(version, criterionToWeight)
    )
      .sort(function (a, b) {
        return b[1] - a[1];
      })
      .map(function ([candidate, score], iCandidate) {
        let rank = iCandidate;
        if (prevWeight !== undefined && prevWeight === score) {
          rank = prevRank;
        }
        prevRank = rank;
        prevWeight = score;
        return [candidate, score, rank];
      }, []);
  }
}
