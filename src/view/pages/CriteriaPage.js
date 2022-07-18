import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";
import CriteriaView from "../../view/molecules/CriteriaView"

export default class CriteriaPage extends AbstractInnerPage {
  get page() {
    return "CriteriaPage";
  }
  get Icon() {
    return PlaylistAddCheckIcon;
  }

  get label() {
    return "Criteria";
  }

  get color() {
    return AppColors.Secondary;
  }

  render() {
    const {context} = this.props;
    const version = context.version;
    return <CriteriaView version={version} />;
  }
}
