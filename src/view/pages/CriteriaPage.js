import { Box, Stack, Typography } from "@mui/material";
import AppColors from "../../view/_constants/AppColors";
import CriteriaView from "../../view/molecules/CriteriaView";
import AbstractStepPage from "../../view/pages/AbstractStepPage";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import { Weight } from "../../nonview/core";
import { t } from "../../nonview/base/I18N";
import { ButtonRandomWeights, ButtonRefreshWeights } from "../../view/atoms";
import { CriterionToWeightView } from "../molecules";

export default class CriteriaPage extends AbstractStepPage {
  get page() {
    return "CriteriaPage";
  }
  get Icon() {
    return LooksOneIcon;
  }

  get label() {
    return "Criteria";
  }

  get color() {
    return AppColors.Criterion;
  }

  get title() {
    return "Step 1: Decide on the criteria for selecting a candidate.";
  }

  get subTitle() {
    return `Identify the traits that you find suitable and unsuitable. Weight the importance of these criteria to guide your selection process.`;
  }

  get fixedHeight() {
    return 40;
  }

  renderFixedCustom() {
    const {
      criterionToWeight,
      onChangeCriterionWeightRandom,
      onChangeCriterionWeightRefresh,
    } = this.props;
    return (
      <Stack direction="column" gap={0.5}>
        <Typography variant="body2">
          {t(
            `Move the slider to the left to make a criterion unsuitable ${Weight.EMOJI.UNSUITABLE}, and to the right to make it suitable ${Weight.EMOJI.SUITABLE}.`
          )}
        </Typography>
        <Typography variant="body1">
          {t(
            "Your choices reflect your political preferences, creating a unique political fingerprint. Red represents unsuitable criteria, Green represents suitable criteria, and Grey represents neutral criteria."
          )}
        </Typography>
        <Stack direction="row" gap={0}>
          <CriterionToWeightView criterionToWeight={criterionToWeight} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {" "}
          </Typography>
          <ButtonRandomWeights
            onChangeCriterionWeightRandom={onChangeCriterionWeightRandom}
          />
          <ButtonRefreshWeights
            onChangeCriterionWeightRefresh={onChangeCriterionWeightRefresh}
          />
        </Stack>
      </Stack>
    );
  }

  renderMoving() {
    const { version, onChangeCriterionWeight, criterionToWeight } = this.props;
    return (
      <CriteriaView
        version={version}
        onChangeCriterionWeight={onChangeCriterionWeight}
        criterionToWeight={criterionToWeight}
      />
    );
  }
}
