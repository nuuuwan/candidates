import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Weight from "../../nonview/core/Weight"
import {t} from "../../nonview/base/I18N"

export default function WeightView({weight}) {

  const color = Weight.getColor(weight);

  return (
    <Stack direction="column" sx={{ textAlign: "right" }} color={color}>
      <Typography variant="h6">{Weight.signed(weight)}</Typography>
      <Typography variant="caption">
        {t(Weight.getQualitativeText(weight))}
      </Typography>
    </Stack>
  );
}
