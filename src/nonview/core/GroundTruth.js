import { CRITERION_TO_CANDIDATE_TO_WEIGHT } from "../../nonview/data/CRITERION_TO_CANDIDATE_TO_WEIGHT";

import MathX from "../../nonview/base/MathX";
import { CANDIDATE_LIST } from "./Candidate";
import { CRITERION_IDX } from "./Criterion";
const ATTR_IDX_IDX = Object({
  default: CRITERION_TO_CANDIDATE_TO_WEIGHT,
});

export default class GroundTruth {
  static VERSIONS = Object.keys(ATTR_IDX_IDX);
  static DEFAULT_VERSION = GroundTruth.VERSIONS[0];
  static DEFAULT_WEIGHT = 0;

  static getVersions() {
    return GroundTruth.VERSIONS;
  }

  static getCriterionToWeightForCandidate(version, candidateID) {
    if (!ATTR_IDX_IDX[version]) {
      version = GroundTruth.DEFAULT_VERSION;
    }
    const criterionIDs = Object.keys(CRITERION_IDX);
    return Object.fromEntries(
      criterionIDs.map(function (criterionID) {
        const candToWeightInfo = ATTR_IDX_IDX[version][criterionID];
        return [criterionID, candToWeightInfo[candidateID].weight];
      })
    );
  }

  static getCriterionToCandidateToWeightInfo(version) {
    if (!ATTR_IDX_IDX[version]) {
      version = GroundTruth.DEFAULT_VERSION;
    }
    return ATTR_IDX_IDX[version];
  }

  static getCandidateToCriterionToWeightInfo(version) {
    if (!ATTR_IDX_IDX[version]) {
      version = GroundTruth.DEFAULT_VERSION;
    }
    return Object.entries(ATTR_IDX_IDX[version]).reduce(function (
      idx,
      [criterionID, candToWeightInfo]
    ) {
      Object.entries(candToWeightInfo).forEach(function ([candidateID, info]) {
        if (!idx[candidateID]) {
          idx[candidateID] = {};
        }
        idx[candidateID][criterionID] = info;
      });
      return idx;
    },
    {});
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

  static getCandidateToWeight(version, criterionToWeight) {
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
      return CANDIDATE_LIST.reduce(function (candToScore, candidate) {
        const candidateID = candidate.id;
        let weightInfo = candToWeightInfo[candidateID];
        if (weightInfo === undefined) {
          weightInfo = {
            weight: GroundTruth.DEFAULT_WEIGHT,
            refs: "",
          };
        }

        if (!candToScore[candidateID]) {
          candToScore[candidateID] = 0;
        }
        candToScore[candidateID] +=
          (criterionToWeight[criterionID] * weightInfo.weight) / totalWeight;
        return candToScore;
      }, candToScore);
    },
    {});
  }

  static getSortedCandidateToWeightAndRank(version, criterionToWeight) {
    let prevWeight = undefined;
    let prevRank = undefined;
    return Object.fromEntries(
      Object.entries(
        GroundTruth.getCandidateToWeight(version, criterionToWeight)
      )
        .sort(function (a, b) {
          return b[1] - a[1];
        })
        .map(function ([candidate, weight], iCandidate) {
          let rank = iCandidate;
          if (prevWeight !== undefined && prevWeight === weight) {
            rank = prevRank;
          }
          prevRank = rank;
          prevWeight = weight;
          return [candidate, { weight, rank }];
        }, [])
    );
  }

  static getWeightToRefsToCandidates(candidateToWeightInfo) {
    return Object.entries(candidateToWeightInfo).reduce(function (
      idx,
      [candidateID, { weight, refs }]
    ) {
      refs = refs || "";
      if (!idx[weight]) {
        idx[weight] = {};
      }
      if (!idx[weight][refs]) {
        idx[weight][refs] = [];
      }
      idx[weight][refs].push(candidateID);
      return idx;
    },
    {});
  }
}
