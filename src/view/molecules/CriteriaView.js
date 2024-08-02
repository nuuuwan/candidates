import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";

import CriterionView from "../../view/molecules/CriterionView";
import { Alert, Box, List, Stack } from "@mui/material";

function InfoText() {
  return (
    <Stack direction="column" gap={1}>
      <Typography variant="body1">
        {t(
          "What criteria would you like to see in a Presidential Candidate? What criteria would be suitable and what would be unsuitable?"
        )}
      </Typography>
      <Alert severity="info">
        {t(
          "Drag the sliders to set the weights of the criteria, and click the Candidates button on the menu below, to see how different candidates score on these criteria."
        )}
      </Alert>
      <Alert severity="info">
        {t("To set random weights, click the Dice button on the menu below.")}
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
