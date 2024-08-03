import GroundTruth from "../../nonview/core/GroundTruth";
import Looks3Icon from "@mui/icons-material/Looks3";
import AppColors from "../../view/_constants/AppColors";
import CandidatesLeaderBoard from "../../view/molecules/CandidatesLeaderBoard";
import AbstractStepPage from "../../view/pages/AbstractStepPage";

export default class CandidatePage extends AbstractStepPage {
  get page() {
    return "CandidatePage";
  }
  get Icon() {
    return Looks3Icon;
  }

  get label() {
    return "Matches";
  }

  get color() {
    return AppColors.Candidate;
  }

  get title() {
    return "Find out which candidate is the best match.";
  }

  renderInner() {
    const { version, criterionToWeight } = this.props;
    const candidateToWeightAndRank =
      GroundTruth.getSortedCandidateToWeightAndRank(version, criterionToWeight);

    return (
      <CandidatesLeaderBoard
        version={version}
        candidateToWeightAndRank={candidateToWeightAndRank}
        criterionToWeight={criterionToWeight}
      />
    );
  }
}
