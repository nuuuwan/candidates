import { Box, Stack, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

import STYLE from "../../view/_constants/STYLE.js";
export default class AbstractStepPage extends AbstractInnerPage {
  get title() {
    return null;
  }
  get subTitle() {
    return null;
  }

  get fixedHeight() {
    return 15;
  }

  renderFixedCustom() {
    return null;
  }

  renderFixed() {
    return (
      <Stack direction="column" gap={1} sx={{ m: 1 }}>
        <Typography variant="h6" color={this.color}>
          {t(this.title)}
        </Typography>
        <Typography variant="body2" color={this.color}>
          {t(this.subTitle)}
        </Typography>
        {this.renderFixedCustom()}
      </Stack>
    );
  }

  renderMoving() {
    return null;
  }

  render() {
    return (
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: 48,
            paddingTop: 2,
            paddingBottom: 1,
            zIndex: 100,
            backgroundColor: "white",
            maxWidth: STYLE.maxWidth,
          }}
        >
          {this.renderFixed()}
        </Box>
        <Box sx={{ marginTop: this.fixedHeight }}>{this.renderMoving()}</Box>
      </Box>
    );
  }
}
