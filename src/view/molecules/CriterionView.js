import { useState } from "react";

import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { t } from "../../nonview/base/I18N";
import WeightView from "../../view/molecules/WeightView"

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
  const [criterionWeight, setCriterionValue] = useState(
    criterionWeights[iCriterion]
  );

  const marks = MARKS_RAW.map(function ({ value, label }) {
    return {
      value,
      label: <Typography sx={{ fontSize: "67%" }}>{t(label)}</Typography>,
    };
  });

  const onChange = function (e) {
    setCriterionValue(parseInt(e.target.value));
  };

  const onChangeCommitted = function (e) {
    onChangeCriterionWeight(iCriterion, criterionWeight);
  };

  const nCriteria = criterionWeights.length;

  return (
    <Card sx={{ m: 1, p: 1 }}>
      <Typography variant="caption">
        {iCriterion + 1}/{nCriteria}
      </Typography>
      <Typography variant="body2">
        {t(criterionID)}
      </Typography>
      <Box sx={{m:1}}>
      <Slider
        value={criterionWeight}
        min={-100}
        max={100}
        marks={marks}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        color="neutral"
      />
      </Box>
      <WeightView weight={criterionWeight} />
    </Card>
  );
}
