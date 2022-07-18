import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class IssuesPage extends AbstractInnerPage {
  get page() {
    return "IssuesPage";
  }
  get Icon() {
    return PlaylistAddCheckIcon;
  }

  get label() {
    return "Issues";
  }

  get color() {
    return AppColors.Secondary;
  }

  render() {
    return "TODO";
  }
}
