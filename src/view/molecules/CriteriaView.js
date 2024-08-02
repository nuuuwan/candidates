import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";

import CriterionView from "../../view/molecules/CriterionView";
import { Alert, Box, List, Stack } from "@mui/material";

function InfoText() {
  return (
    <Stack direction="column" gap={1}>
      <Alert severity="info">
        {t("Drag the sliders to set the weights of the criteria.")}
      </Alert>
    </Stack>
  );
}

export default function CriteriaView({
  version,
  onChangeCriterionWeight,
  criterionToWeight,
}) {
  const criterionIDs = GroundTruth.getCriterionIDs(version);
  return (
    <Box>
      <InfoText />
      <List>
        {criterionIDs.map(function (criterionID, iCriterion) {
          const key = "criterion-" + version + "-" + criterionID;
          return (
            <CriterionView
              key={key}
              iCriterion={iCriterion}
              criterionID={criterionID}
              criterionToWeight={criterionToWeight}
              onChangeCriterionWeight={onChangeCriterionWeight}
            />
          );
        })}
      </List>
      <Typography variant="caption">{t("000 Version", version)}</Typography>
    </Box>
  );
}
