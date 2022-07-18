import { useState } from "react";

import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";

const MARKS_RAW = [
  { value: 50, label: "Desirable" },
  { value: 0, label: "Neutral" },
  { value: -50, label: "Undesirable" },
];

export default function CriterionView({
  iCriterion,
  criterionID,
  onChangeCriterionWeight,
  criterionWeights,
}) {
  const [criterionValue, setCriterionValue] = useState(
    criterionWeights[iCriterion]
  );

  const marks = MARKS_RAW.map(function ({ value, label }) {
    return {
      value,
      label: <Typography sx={{ fontSize: "50%" }}>{t(label)}</Typography>,
    };
  });

  const onChange = function (e) {
    setCriterionValue(parseInt(e.target.value));
  };

  const onChangeCommitted = function (e) {
    onChangeCriterionWeight(iCriterion, criterionValue);
  };

  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Typography variant="h6">{t(criterionID)}</Typography>
      <Slider
        defaultValue={0}
        min={-100}
        max={100}
        marks={marks}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
      />
    </Card>
  );
}
