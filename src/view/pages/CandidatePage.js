import GroundTruth from "../../nonview/core/GroundTruth";
import Looks3Icon from "@mui/icons-material/Looks3";
import AppColors from "../../view/_constants/AppColors";
import CandidatesLeaderBoard from "../../view/molecules/CandidatesLeaderBoard";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import { Box, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
export default class CandidatePage extends AbstractInnerPage {
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

  render() {
    const { version, criterionToWeight } = this.props;
    const candidateToWeightAndRank =
      GroundTruth.getSortedCandidateToWeightAndRank(version, criterionToWeight);

    return (
      <Box>
        <Typography variant="h6" color={this.color}>
          {t("Find out which candidate is the best match.")}
        </Typography>

        <CandidatesLeaderBoard
          candidateToWeightAndRank={candidateToWeightAndRank}
        />
      </Box>
    );
  }
}
