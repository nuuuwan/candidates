import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function XHandleView({ xHandle }) {
  if (!xHandle || xHandle === "Unknown") {
    return null;
  }
  const url = `https://x.com/${xHandle}`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <XIcon />
    </IconButton>
  );
}
