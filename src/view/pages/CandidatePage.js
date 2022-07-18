import PeopleIcon from "@mui/icons-material/People";

import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import GroundTruth from "../../nonview/core/GroundTruth";
export default class CandidatePage extends AbstractInnerPage {
  get page() {
    return "CandidatePage";
  }
  get Icon() {
    return PeopleIcon;
  }

  get label() {
    return "Candidates";
  }

  get color() {
    return AppColors.Primary;
  }

  render() {
    const { context } = this.props;
    const version = context.version;
    const criterionWeights = JSON.parse(context.criterionWeightsJSON);

    const candidateToScore = GroundTruth.getCandidateToScore(
      version,
      criterionWeights
    );
    return JSON.stringify(candidateToScore);
  }
}
