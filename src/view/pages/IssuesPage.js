import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class IssuesPage extends AbstractInnerPage {
  get page() {
    return "IssuesPage";
  }
  get Icon() {
    return PlaylistAddCheckIcon;
  }

  render() {
    return "TODO";
  }
}
