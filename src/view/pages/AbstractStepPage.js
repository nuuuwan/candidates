import { Box, Stack, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

export default class AbstractStepPage extends AbstractInnerPage {
  get title() {
    return null;
  }
  get subTitle() {
    return null;
  }

  get fixedHeight() {
    const { lang } = this.props;
    if (lang === "ta") {
      return 35;
    }
    if (lang === "si") {
      return 20;
    }
    return 10;
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
        {this.renderFixed()}
        {this.renderMoving()}
      </Box>
    );
  }
}
