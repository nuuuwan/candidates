import AppColors from "../../view/_constants/AppColors";
import CriteriaView from "../../view/molecules/CriteriaView";
import AbstractStepPage from "../../view/pages/AbstractStepPage";
import LooksOneIcon from "@mui/icons-material/LooksOne";

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
    return "Identify and Weight the criteria you care about.";
  }

  get subTitle() {
    return "That is, what you want to see in a candidate.";
  }

  renderInner() {
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
