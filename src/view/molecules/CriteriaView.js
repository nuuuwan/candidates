import { Box, List } from "@mui/material";

import GroundTruth from "../../nonview/core/GroundTruth";

import CriterionView from "../../view/molecules/CriterionView";

export default function CriteriaView({
  version,
  onChangeCriterionWeight,
  criterionToWeight,
}) {
  const criterionIDs = GroundTruth.getCriterionIDs(version);
  console.debug({
    criterionIDs,
    criterionToWeight,
  });
  return (
    <Box>
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
