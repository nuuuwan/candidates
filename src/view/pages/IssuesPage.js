import KeyIcon from "@mui/icons-material/Key";

import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class IssuesPage extends AbstractInnerPage {
  get page() {
    return "issuesPage";
  }
  get Icon() {
    return KeyIcon;
  }

  render() {
    return 'TODO'
  }
}
