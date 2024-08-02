import { IconButton } from "@mui/material";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function ParliamentView({ parliamentNum }) {
  if (!parliamentNum || parliamentNum === "null") {
    return null;
  }
  const url = `https://www.parliament.lk/component/members/viewMember/${parliamentNum}/`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <AccountBalanceIcon />
    </IconButton>
  );
}
