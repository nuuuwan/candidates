import { Typography, Link } from "@mui/material";

export default function XHandleView({ xHandle }) {
  if (!xHandle || xHandle === "Unknown") {
    return null;
  }
  const xProfileUrl = `https://x.com/${xHandle}`;
  return (
    <Link href={xProfileUrl} target="_blank" rel="noopener noreferrer">
      <Typography variant="body1">@{xHandle}</Typography>
    </Link>
  );
}
