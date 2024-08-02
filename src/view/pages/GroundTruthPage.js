import { Box, Typography, Stack } from "@mui/material";

import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { t } from "../../nonview/base/I18N";
import { GroundTruthView } from "../../view/molecules";
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class GroundTruthPage extends AbstractInnerPage {
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

  render() {
    const { version } = this.props;
    return (
      <Box>
        <Typography variant="h6" color={this.color}>
          {t("Learn how each candidate matches up to those criteria.")}
        </Typography>
        <Stack spacing={2} sx={{ m: 1, p: 1 }}>
          <GroundTruthView version={version} />
        </Stack>
      </Box>
    );
  }
}
