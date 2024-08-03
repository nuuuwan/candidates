import { Stack, Typography } from "@mui/material";
import { Criterion, GroundTruth, Weight } from "../../nonview/core";
import CandidateProfileView from "./CandidateProfileView";
import { t } from "../../nonview/base/I18N";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AppColors from "../_constants/AppColors";
function WeightIcon({ weight }) {
  let Icon = HelpOutlineIcon;
  if (weight > 0) {
    Icon = CheckCircleOutlineIcon;
  } else if (weight < 0) {
    Icon = HighlightOffIcon;
  }
  const color = Weight.getColor(weight);
  return <Icon sx={{ color }} />;
}

function CriterionGroundTruthView({ criterionID, weight, refs }) {
  const color = Weight.getColor(weight);
  const criterion = Criterion.fromID(criterionID);
  return (
    <Stack direction="column" gap={1}>
      {" "}
      <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
        <WeightIcon weight={weight} />
        <Typography variant="body2" color={color}>
          "{t(criterion.details)}"
        </Typography>{" "}
      </Stack>
      <Typography variant="caption">{refs}</Typography>
    </Stack>
  );
}

function CandidateGroundTruthView({ candidateID, criterionToWeightInfo }) {
  return (
    <Stack
      direction="column"
      gap={1}
      sx={{ backgroundColor: AppColors.VeryLight, p: 1 }}
    >
      <CandidateProfileView candidateID={candidateID} />
      {Object.entries(criterionToWeightInfo).map(function ([
        criterionID,
        { weight, refs },
      ]) {
        return (
          <CriterionGroundTruthView
            key={criterionID}
            criterionID={criterionID}
            weight={weight}
            refs={refs}
          />
        );
      })}
    </Stack>
  );
}

export default function GroundTruthView({ version }) {
  const candidateToCriterionToWeightInfo =
    GroundTruth.getCandidateToCriterionToWeightInfo(version);
  return (
    <Stack direction="column" gap={1}>
      {Object.entries(candidateToCriterionToWeightInfo).map(function ([
        candidateID,
        criterionToWeightInfo,
      ]) {
        return (
          <CandidateGroundTruthView
            key={candidateID}
            candidateID={candidateID}
            criterionToWeightInfo={criterionToWeightInfo}
          />
        );
      })}
    </Stack>
  );
}
