import { Alert, Box, List, Stack, Typography } from "@mui/material";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";
import CriterionToWeightView from "./CriterionToWeightView";
import CriterionView from "../../view/molecules/CriterionView";

export default function CriteriaView({
  version,
  onChangeCriterionWeight,
  criterionToWeight,
}) {
  const criterionIDs = GroundTruth.getCriterionIDs(version);
  return (
    <Box>
      <CriterionToWeightView criterionToWeight={criterionToWeight} />
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
    </Box>
  );
}
