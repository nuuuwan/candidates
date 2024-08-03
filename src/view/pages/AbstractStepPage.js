import { Box, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class AbstractStepPage extends AbstractInnerPage {
  get title() {
    return null;
  }
  get subTitle() {
    return null;
  }

  renderInner() {
    return null;
  }

  render() {
    return (
      <Box>
        <Typography variant="h6" color={this.color}>
          {t(this.title)}
        </Typography>
        <Typography variant="body1" color={this.color}>
          {t(this.subTitle)}
        </Typography>
        <Box sx={{ marginTop: 2 }}>{this.renderInner()}</Box>
      </Box>
    );
  }
}
