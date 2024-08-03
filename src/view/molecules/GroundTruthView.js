import { Stack, Typography } from "@mui/material";
import { Criterion, GroundTruth, Weight } from "../../nonview/core";
import CandidateProfileView from "./CandidateProfileView";
import { t } from "../../nonview/base/I18N";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AppColors from "../_constants/AppColors";
import { CRITERION_IDX } from "../../nonview/core/Criterion";
import { CANDIDATE_IDS } from "../../nonview/core/Candidate";
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
      <Typography variant="caption">{t(refs)}</Typography>
    </Stack>
  );
}

function CandidateGroundTruthView({
  candidateID,
  criterionToWeightInfo,
  version,
}) {
  const criterionIDs = Object.keys(CRITERION_IDX);
  return (
    <Stack
      direction="column"
      gap={1}
      sx={{ backgroundColor: AppColors.VeryLight, p: 1 }}
    >
      <CandidateProfileView candidateID={candidateID} version={version} />
      {criterionIDs.map(function (criterionID) {
        const { weight, refs } = criterionToWeightInfo[criterionID];
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
      {CANDIDATE_IDS.map(function (candidateID) {
        const criterionToWeightInfo =
          candidateToCriterionToWeightInfo[candidateID];
        return (
          <CandidateGroundTruthView
            key={candidateID}
            candidateID={candidateID}
            criterionToWeightInfo={criterionToWeightInfo}
            version={version}
          />
        );
      })}
    </Stack>
  );
}
