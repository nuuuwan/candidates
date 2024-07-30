import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";

import CriterionView from "../../view/molecules/CriterionView";
import { Alert } from "@mui/material";

export default function CriteriaView({
  version,
  onChangeCriterionWeight,
  criterionWeights,
  refHomePage,
}) {
  const criteria = GroundTruth.getCriteria(version);
  return (
    <Stack gap={1} ref={refHomePage}>
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
      {criteria.map(function (criterionID, iCriterion) {
        const key = "criterion-" + version + "-" + criterionID;
        return (
          <CriterionView
            key={key}
            iCriterion={iCriterion}
            criterionID={criterionID}
            criterionWeights={criterionWeights}
            onChangeCriterionWeight={onChangeCriterionWeight}
          />
        );
      })}
      <Typography sx={{ color: "lightgray", fontSize: "50%" }}>
        {t("000 Version", version)}
      </Typography>
    </Stack>
  );
}
