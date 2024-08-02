import { useState } from "react";

import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import Weight from "../../nonview/core/Weight";

import WeightView from "../../view/molecules/WeightView";
import { ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import AppColors from "../_constants/AppColors";
import Criterion from "../../nonview/core/Criterion";

const MARKS = [-100, 0, 100].map(function (value) {
  return {
    value,
    label: Weight.getDirectionEmoji(value),
  };
});

function CustomSlider({
  setCriterionValue,
  onChangeCriterionWeight,
  iCriterion,
  criterionID,
  criterionWeight,
}) {
  const criterion = Criterion.fromId(criterionID);
  const onChange = function (e) {
    setCriterionValue(parseInt(e.target.value));
  };

  const onChangeCommitted = function (e) {
    onChangeCriterionWeight(criterionID, criterionWeight);
  };

  const color = Weight.getColor(criterionWeight);

  return (
    <Box>
      <Typography variant="body2">{`"${t(criterion.details)}"`}</Typography>
      <Box>
        <Slider
          value={criterionWeight}
          min={-100}
          max={100}
          onChange={onChange}
          onChangeCommitted={onChangeCommitted}
          color="neutral"
          sx={{
            color,
            width: Math.min(window.innerWidth * 0.5, 480),
            fontSize: 5,
          }}
          marks={MARKS}
        />
      </Box>
    </Box>
  );
}

export default function CriterionView({
  iCriterion,
  criterionID,
  onChangeCriterionWeight,
  criterionToWeight,
}) {
  const [criterionWeight, setCriterionValue] = useState(
    criterionToWeight[criterionID]
  );

  return (
    <ListItem component={Paper} sx={{ m: 1, p: 1 }}>
      <ListItemAvatar>
        <Typography variant="h6" color={AppColors.Light}>
          {String.fromCharCode(65 + iCriterion)}.
        </Typography>
      </ListItemAvatar>
      <ListItemText>
        <Stack direction="row" sx={{ marginLeft: 2 }}>
          <CustomSlider
            setCriterionValue={setCriterionValue}
            onChangeCriterionWeight={onChangeCriterionWeight}
            iCriterion={iCriterion}
            criterionID={criterionID}
            criterionWeight={criterionWeight}
          />

          <Typography sx={{ flexGrow: 1 }}> </Typography>

          <Box sx={{ marginLeft: 1 }}>
            <WeightView weight={criterionWeight} />
          </Box>
        </Stack>
      </ListItemText>
    </ListItem>
  );
}
