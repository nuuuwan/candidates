import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { t } from "../../nonview/base/I18N";

const MARKS_RAW = [
  { value: 50, label: "Desirable" },
  { value: 0, label: "Neutral" },
  { value: -50, label: "Undesirable" },
];

export default function CriterionView({ iCriterion, criterionID }) {
  const marks = MARKS_RAW.map(function ({ value, label }) {
    return {
      value,
      label: <Typography sx={{ fontSize: "50%" }}>{t(label)}</Typography>,
    };
  });

  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Typography variant="h6">{t(criterionID)}</Typography>
      <Slider defaultValue={0} min={-100} max={100} marks={marks} />
    </Card>
  );
}
