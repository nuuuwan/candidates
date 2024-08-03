import { Stack, Typography } from "@mui/material";
import { CRITERION_LIST } from "../../nonview/core/Criterion";
import { Weight } from "../../nonview/core";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
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
              width: 10,
              height: 10,
              borderRadius: 10,
              fontSize: 10,
            }}
          >
            {"."}
          </span>
        );
      })}
      <Typography variant="caption" sx={{ marginLeft: 1 }}>
        {label}
      </Typography>
    </Stack>
  );
}
