import { IconButton, Tooltip } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import { t } from "../../nonview/base/I18N";
export default function ButtonRandomWeight({ onChangeCriterionWeightRandom }) {
  return (
    <Tooltip title={t("Set Random Weights")}>
      <IconButton onClick={onChangeCriterionWeightRandom}>
        <CasinoIcon />
      </IconButton>
    </Tooltip>
  );
}
