import GroundTruth from "../../nonview/core/GroundTruth";
import Looks3Icon from "@mui/icons-material/Looks3";
import AppColors from "../../view/_constants/AppColors";
import CandidatesLeaderBoard from "../../view/molecules/CandidatesLeaderBoard";
import AbstractStepPage from "../../view/pages/AbstractStepPage";
import { Alert, Box, Stack, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
import CriteriaPage from "./CriteriaPage";
import { ButtonPage } from "../atoms";

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
    return "Step 3: Find out which candidates are the best matches.";
  }

  get subTitle() {
    return `We have evaluated each candidate based on the specified criteria.`;
  }

  get fixedHeight() {
    return 34;
  }

  renderFixedCustom() {
    return (
      <Stack direction="column" gap={0.5}>
        <Typography variant="body1">
          {t(
            "A score of +100 means the candidate perfectly fits your suitability criteria, while a score of -100 means the candidate perfectly fits your unsuitability criteria."
          )}
        </Typography>
        <Typography variant="body1">
          {t(
            "We calculate the score by computing the vector dot product between your political finger print and the candidates political fingerprint."
          )}
        </Typography>
      </Stack>
    );
  }
  renderMoving() {
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

  render() {
    const { version, criterionToWeight, onChangePage } = this.props;
    const candidateToWeightAndRank =
      GroundTruth.getSortedCandidateToWeightAndRank(version, criterionToWeight);

    if (!GroundTruth.hasWinner(candidateToWeightAndRank)) {
      return (
        <Alert severity="error">
          {t("You haven't selected any criteria as yet.")}
          <Box>
            <ButtonPage
              Page={CriteriaPage}
              onChangePage={onChangePage}
              customLabel={"Go back to Step 1"}
            />
          </Box>
        </Alert>
      );
    }
    return super.render();
  }
}
