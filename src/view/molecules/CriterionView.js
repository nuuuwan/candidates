import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";

export default function CriterionView({ iCriterion, criterionID }) {
  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Typography variant="h6">{t(criterionID)}</Typography>
    </Card>
  );
}
