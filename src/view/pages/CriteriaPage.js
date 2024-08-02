import { Box, Typography } from "@mui/material";
import AppColors from "../../view/_constants/AppColors";
import CriteriaView from "../../view/molecules/CriteriaView";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import { t } from "../../nonview/base/I18N";
export default class CriteriaPage extends AbstractInnerPage {
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

  render() {
    const { version, onChangeCriterionWeight, criterionToWeight } = this.props;
    return (
      <Box>
        <Typography variant="h6" color={AppColors.Criterion}>
          {t("Identify and Weight the criteria you care about.")}
        </Typography>
        <Typography variant="body1" color={AppColors.Criterion}>
          {t("That is, what you want to see in a candidate.")}
        </Typography>
        <CriteriaView
          version={version}
          onChangeCriterionWeight={onChangeCriterionWeight}
          criterionToWeight={criterionToWeight}
        />
      </Box>
    );
  }
}
