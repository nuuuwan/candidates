import { Typography, Link } from "@mui/material";

export default function WikipediaPageView({ wikipediaPage }) {
  if (!wikipediaPage || wikipediaPage === "Unknown") {
    return null;
  }
  const url = `https://en.wikipedia.org/wiki/${wikipediaPage}`;
  const wikipediaTitle = wikipediaPage.replaceAll("_", " ");

  return (
    <Typography variant="body1">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {wikipediaTitle}
      </Link>
      {" on Wikipedia"}
    </Typography>
  );
}
