import { Button, Typography } from "@mui/material";
import { t } from "../../nonview/base/I18N";

export default function ButtonPage({ Page, onChangePage, customLabel }) {
  const page = new Page();

  const onClick = function () {
    onChangePage(page.page);
  };

  return (
    <Button onClick={onClick}>
      <Typography variant="body1" color={page.color}>
        {t(customLabel || page.label)}
      </Typography>
    </Button>
  );
}
