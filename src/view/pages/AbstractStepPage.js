import { Box, Typography } from "@mui/material";
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

  renderFixed() {
    return (
      <Box>
        <Typography variant="h6" color={this.color}>
          {t(this.title)}
        </Typography>
        <Typography variant="body1" color={this.color}>
          {t(this.subTitle)}
        </Typography>
      </Box>
    );
  }

  renderInner() {
    return null;
  }

  render() {
    return (
      <Box>
        <Box
          sx={{
            position: "fixed",
            top: 60,
            paddingTop: 2,
            paddingBottom: 2,
            zIndex: 100,
            backgroundColor: "white",
            width: STYLE.maxWidth,
          }}
        >
          {this.renderFixed()}
        </Box>
        <Box sx={{ marginTop: 15 }}>{this.renderInner()}</Box>
      </Box>
    );
  }
}
