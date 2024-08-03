import { Stack, Typography } from "@mui/material";
import { CRITERION_LIST } from "../../nonview/core/Criterion";
import { Weight } from "../../nonview/core";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

const DIM = 8;
export default function CriterionToWeightView({ criterionToWeight, label }) {
  return (
    <Stack
      direction="row"
      gap={0}
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <FingerprintIcon />
      {CRITERION_LIST.map(function (criterion, iCriterion) {
        const weight = criterionToWeight[criterion.id];
        const color = Weight.getColor(weight);
        return (
          <span
            key={criterion.id}
            style={{
              backgroundColor: color,
              color,
              width: DIM,
              height: DIM,
              borderRadius: DIM,
              fontSize: DIM,
            }}
          >
            {"."}
          </span>
        );
      })}
      <Typography variant="caption" sx={{ marginLeft: 0.5 }}>
        {label}
      </Typography>
    </Stack>
  );
}
