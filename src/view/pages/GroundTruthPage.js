import StorageIcon from "@mui/icons-material/Storage";

import AppColors from "../../view/_constants/AppColors";

import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class GroundTruthPage extends AbstractInnerPage {
  get page() {
    return "GroundTruthPage";
  }
  get Icon() {
    return StorageIcon;
  }

  get label() {
    return "Ground Truth";
  }

  get color() {
    return AppColors.GroundTruth;
  }

  render() {
    return "GroundTruth";
  }
}
