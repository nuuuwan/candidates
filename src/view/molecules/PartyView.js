import { Typography } from "@mui/material";

import { t } from "../../nonview/base/I18N";
import Party from "../../nonview/core/Party";

import AlignCenter from "../../view/atoms/AlignCenter";

export default function PartyView({ partyCode }) {
  const partyId = partyCode.split("(")[0].trim();
  const party = Party.fromID(partyId);
  if (!party) {
    throw new Error("Invalid party ID: " + partyCode);
  }
  const color = party.color;
  return (
    <AlignCenter>
      <Typography variant="caption" sx={{ color }}>
        {t(partyCode)}
      </Typography>
    </AlignCenter>
  );
}
