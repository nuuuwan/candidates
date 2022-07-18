import PeopleIcon from "@mui/icons-material/People";

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
    return "TODO";
  }
}
