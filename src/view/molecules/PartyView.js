import Typography from "@mui/material/Typography";
import { t } from "../../nonview/base/I18N";
import Party from "../../nonview/core/Party";
import AlignCenter from "../../view/atoms/AlignCenter";

const AVATAR_SIZE = 12;

export default function PartyView({ id }) {
  const party = Party.fromID(id);
  const color = party.color;
  return (
    <AlignCenter>
      <img
        src={party.imgSrc}
        style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
      <Typography variant="caption">{t(id)}</Typography>
    </AlignCenter>
  );
}
