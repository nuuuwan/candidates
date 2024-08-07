import { Stack, Typography, Divider } from "@mui/material";
import PartyView from "./PartyView";
import AppColors from "../_constants/AppColors";

export default function SupportView({ support }) {
  if (!support) {
    return null;
  }
  const partyCodeList = support.split(",").map((party) => party.trim());
  return (
    <Stack direction="row" gap={0.5}>
      <Typography
        variant="caption"
        component="span"
        color={AppColors.MoreLight}
      >
        Support from
      </Typography>
      <Stack
        direction="row"
        gap={0.5}
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
      >
        {partyCodeList.map(function (partyCode) {
          return <PartyView key={partyCode} partyCode={partyCode} />;
        })}
      </Stack>{" "}
    </Stack>
  );
}
