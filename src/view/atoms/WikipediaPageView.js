import { IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function WikipediaPageView({ wikipediaPage }) {
  if (!wikipediaPage || wikipediaPage === "null") {
    return null;
  }
  const url = `https://en.wikipedia.org/wiki/${wikipediaPage}`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <LanguageIcon />
    </IconButton>
  );
}
