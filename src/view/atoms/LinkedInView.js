import { IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function LinkedInView({ linkedInID }) {
  if (!linkedInID || linkedInID === "null") {
    return null;
  }
  const url = `https://www.linkedin.com/in/${linkedInID}/`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <LinkedInIcon />
    </IconButton>
  );
}
