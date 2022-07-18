import PeopleIcon from "@mui/icons-material/People";
import Stack from '@mui/material/Stack';
import GroundTruth from "../../nonview/core/GroundTruth";
import CandidateView from "../../view/molecules/CandidateView"
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

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

    const candidateAndScore = GroundTruth.getSortedCandidateAndScore(
      version,
      criterionWeights
    );
    return (
      <Stack gap={1}>
        {candidateAndScore.map(
          function([candidateId, score]) {
            const key = "candidate-" + candidateId;
            return <CandidateView key={key} candidateId={candidateId} score={score} />;
          }
        )}
      </Stack>
    )

  }
}
