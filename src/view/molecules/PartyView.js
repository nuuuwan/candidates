import { Avatar, Typography } from "@mui/material";

import { t } from "../../nonview/base/I18N";
import Party from "../../nonview/core/Party";

import AlignCenter from "../../view/atoms/AlignCenter";

const AVATAR_SIZE = 15;

export default function PartyView({ id }) {
  const party = Party.fromID(id);
  if (!party) {
    throw new Error("Invalid party ID: " + id);
  }
  const color = party.color;
  return (
    <AlignCenter>
      <Avatar
        src={party.imgSrc}
        sx={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderColor: color,
          color,
        }}
      />

      <Typography variant="caption" sx={{ color }}>
        {t(id)}
      </Typography>
    </AlignCenter>
  );
}
