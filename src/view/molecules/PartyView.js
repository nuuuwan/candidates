import { Typography } from "@mui/material";

import { t } from "../../nonview/base/I18N";
import Party from "../../nonview/core/Party";

import AlignCenter from "../../view/atoms/AlignCenter";

export default function PartyView({ id }) {
  const party = Party.fromID(id);
  if (!party) {
    throw new Error("Invalid party ID: " + id);
  }
  const color = party.color;
  return (
    <AlignCenter>
      <Typography
        variant="caption"
        sx={{ color: "white", backgroundColor: color, p: 0.3, fontSize: "50%" }}
      >
        {t(id)}
      </Typography>
    </AlignCenter>
  );
}
