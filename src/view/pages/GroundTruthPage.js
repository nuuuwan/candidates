import LooksTwoIcon from "@mui/icons-material/LooksTwo";

import { GroundTruthView } from "../../view/molecules";
import AppColors from "../../view/_constants/AppColors";
import AbstractStepPage from "../../view/pages/AbstractStepPage";

export default class GroundTruthPage extends AbstractStepPage {
  get page() {
    return "GroundTruthPage";
  }
  get Icon() {
    return LooksTwoIcon;
  }

  get label() {
    return "Candidates";
  }

  get color() {
    return AppColors.GroundTruth;
  }

  get title() {
    return "Learn how each candidate matches up to those criteria.";
  }

  renderInner() {
    const { version } = this.props;
    return <GroundTruthView version={version} />;
  }
}
