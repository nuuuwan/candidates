import GroundTruth from "../../nonview/core/GroundTruth";
import CriterionView from "../../view/molecules/CriterionView"
import Stack from '@mui/material/Stack';

export default function CriteriaView({ version }) {
  const criteria = GroundTruth.getCriteria(version);
  return (
    <Stack gap={1}>
      {
        criteria.map(
          function(criterionID, iCriterion) {
            const key = "criterion-" + version + "-" + criterionID;
            return <CriterionView key={key} iCriterion={iCriterion} criterionID={criterionID} />;
          }
        )
      }
    </Stack>
  )
}
