import LooksTwoIcon from "@mui/icons-material/LooksTwo";

import { GroundTruthView } from "../../view/molecules";
import AppColors from "../../view/_constants/AppColors";
import AbstractStepPage from "../../view/pages/AbstractStepPage";
import { Box, Stack, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
import { ButtonPage } from "../atoms";
import CandidatePage from "./CandidatePage";

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
    return "Step 2: Learn how candidates match the criteria.";
  }

  get subTitle() {
    return `We have analyzed how the election candidates perform on our criteria, based on information from reputable sources.`;
  }

  get fixedHeight() {
    return 42;
  }

  renderFixedCustom() {
    return (
      <Stack direction="column" gap={0.5}>
        <Typography variant="body1">
          {t(
            "Using this information we can derive a political fingerprint for the candidates."
          )}
        </Typography>{" "}
        <Typography variant="caption">
          {t(
            "Do not change your criteria based on this information to avoid any bias toward a particular candidate without a rational reason."
          )}
        </Typography>{" "}
        <Typography variant="caption">
          {t(
            "To ensure everyone, regardless of political views, agrees on our evaluation, please let us know if you spot any errors."
          )}
        </Typography>{" "}
        <Typography variant="caption">
          {t("Candidates are listed in Alphabetical Order of Last Name.")}
        </Typography>
      </Stack>
    );
  }

  renderMoving() {
    const { version, onChangePage } = this.props;
    return (
      <Box>
        <GroundTruthView version={version} />{" "}
        <ButtonPage
          Page={CandidatePage}
          onChangePage={onChangePage}
          customLabel={"Next: Step 3"}
        />
      </Box>
    );
  }
}
