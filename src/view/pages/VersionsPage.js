import CategoryIcon from "@mui/icons-material/Category";

import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class VersionsPage extends AbstractInnerPage {
  get page() {
    return "VersionsPage";
  }
  get Icon() {
    return CategoryIcon;
  }

  get label() {
    return "Versions";
  }

  get color() {
    return AppColors.Success;
  }

  render() {
    return "TODO";
  }
}
