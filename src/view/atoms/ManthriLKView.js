import { IconButton } from "@mui/material";

import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
export default function ManthriLKView({ manthriLKID }) {
  if (!manthriLKID || manthriLKID === "null") {
    return null;
  }
  const url = `https://manthri.lk/en/politicians/${manthriLKID}/`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <DownloadDoneIcon />
    </IconButton>
  );
}
