import { IconButton, Tooltip } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { t } from "../../nonview/base/I18N";
export default function ButtonRefreshWeights({
  onChangeCriterionWeightRefresh,
}) {
  return (
    <Tooltip title={t("Set All Weights to Zero (Neutral)")}>
      <IconButton onClick={onChangeCriterionWeightRefresh}>
        <RestartAltIcon />
      </IconButton>
    </Tooltip>
  );
}
