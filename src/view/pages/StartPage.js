import StartIcon from "@mui/icons-material/Start";

import { t } from "../../nonview/base/I18N";
import AppColors from "../_constants/AppColors";

import AbstractInnerPage from "./AbstractInnerPage";
import {
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CriteriaPage from "./CriteriaPage";
import CandidatePage from "./CandidatePage";
import GroundTruthPage from "./GroundTruthPage";

export default class StartPage extends AbstractInnerPage {
  get page() {
    return "StartPage";
  }
  get Icon() {
    return StartIcon;
  }

  get label() {
    return "Start";
  }

  get color() {
    return AppColors.Start;
  }

  renderHeader() {
    return (
      <>
        <Typography variant="body1">
          {t(
            "Suppose you want to pick a candidate to vote for in the upcoming 2024 Sri Lankan Presidential Election."
          )}
        </Typography>
        <Typography variant="h6">
          {t("How might you pick your candidate rationally?")}
        </Typography>{" "}
        <Typography variant="body1">
          {t("Picking a Candidate to vote for, is a three-step process.")}
        </Typography>
      </>
    );
  }

  renderStepPage(StepPage, iStepPage) {
    const stepPage = new StepPage();
    const color = stepPage.color;
    const Icon = stepPage.Icon;

    return (
      <ListItem key={"step-page-" + iStepPage}>
        <ListItemIcon>
          <Icon sx={{ color }} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1" color={color}>
            {t(stepPage.title)}
          </Typography>{" "}
          <Typography variant="caption" color={color}>
            {t(stepPage.subTitle)}
          </Typography>
        </ListItemText>
      </ListItem>
    );
  }

  render() {
    const StepPageList = [CriteriaPage, GroundTruthPage, CandidatePage];
    return (
      <Stack direction="column" gap={1}>
        {this.renderHeader()}
        <List>
          {StepPageList.map(
            function (StepPage, iStepPage) {
              return this.renderStepPage(StepPage, iStepPage);
            }.bind(this)
          )}
        </List>
      </Stack>
    );
  }
}
