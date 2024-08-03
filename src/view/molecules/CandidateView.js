import { ListItem, ListItemText, Stack, Typography } from "@mui/material";

import Candidate from "../../nonview/core/Candidate";

import WeightView from "../../view/molecules/WeightView";
import AppColors from "../_constants/AppColors";

import CriterionToWeightView from "./CriterionToWeightView";
import CandidateProfileView from "./CandidateProfileView";
import { Weight } from "../../nonview/core";

export default function CandidateView({
  candidateID,
  weight,
  rank,
  criterionToWeight,
}) {
  const candidate = Candidate.fromID(candidateID);
  const color = Weight.getColor(weight);
  return (
    <ListItem sx={{ marginBottom: 2, backgroundColor: AppColors.VeryLight }}>
      <ListItemText>
        <Stack direction="row" gap={1}>
          <Typography variant="h6" color={color}>
            #{rank + 1}
          </Typography>
          <CandidateProfileView
            candidateID={candidate.id}
            custom={
              <CriterionToWeightView
                criterionToWeight={criterionToWeight}
                label="You"
              />
            }
          />
          <Typography sx={{ flexGrow: 1 }}> </Typography>
          <WeightView weight={weight} />
        </Stack>
      </ListItemText>
    </ListItem>
  );
}
