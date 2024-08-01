import { Typography, Link } from "@mui/material";

export default function XHandleView({ xHandle }) {
  if (!xHandle || xHandle === "Unknown") {
    return null;
  }
  const url = `https://x.com/${xHandle}`;

  return (
    <Typography variant="body1">
      @
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {xHandle}
      </Link>
      {" on X"}
    </Typography>
  );
}
