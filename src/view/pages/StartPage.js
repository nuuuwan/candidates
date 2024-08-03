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
  Box,
} from "@mui/material";
import CriteriaPage from "./CriteriaPage";
import CandidatePage from "./CandidatePage";
import GroundTruthPage from "./GroundTruthPage";
import { TimeX } from "../../nonview/base";
import { ButtonPage } from "../atoms";

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
    const UT_PRESPOLLSL2024 = TimeX.parseTime("2024-09-21T17:00:00.000+05:30");
    const dUT = UT_PRESPOLLSL2024 - TimeX.getUnixTime();
    const dUTDays = Math.floor(dUT / TimeX.SECONDS_IN.DAY);
    const dUTHours = Math.floor(
      (dUT % TimeX.SECONDS_IN.DAY) / TimeX.SECONDS_IN.HOUR
    );
    const dUTMinutes = Math.floor(
      (dUT % TimeX.SECONDS_IN.HOUR) / TimeX.SECONDS_IN.MINUTE
    );
    const dUTSeconds = Math.floor(dUT % TimeX.SECONDS_IN.MINUTE);

    return (
      <>
        <Typography variant="body1">
          {t(
            "The 2024 Sri Lankan Presidential Election is scheduled for Saturday, the 21st of September 2024."
          )}
        </Typography>
        <Typography variant="h6" color={{ color: AppColors.Criterion }}>
          {t(
            "On Election Day, Polling Stations will close at 5pm. Or in 000 days, 001 hours, 002 minutes, and 003 seconds, time.",
            dUTDays,
            dUTHours,
            dUTMinutes,
            dUTSeconds
          )}
        </Typography>
        <Typography variant="body1">
          {t("Do you know who you are going to vote for?")}
        </Typography>{" "}
        <Typography variant="h6" color={{ color: AppColors.GroundTruth }}>
          {t("How might you pick your candidate rationally?")}
        </Typography>{" "}
        <Typography variant="body1">{t("This App might help you.")}</Typography>{" "}
        <Typography variant="h6" color={{ color: AppColors.Candidate }}>
          {t("It is just a simple 3-step process.")}
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
    const { onChangePage } = this.props;

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
        <Box>
          <ButtonPage
            Page={CriteriaPage}
            onChangePage={onChangePage}
            customLabel={"NEXT: Step 1"}
          />
        </Box>
      </Stack>
    );
  }
}
