import LanguageIcon from "@mui/icons-material/Language";
import GenericButtonLink from "./GenericButtonLink";

export default function ButtonWikipedia({ wikipediaPage }) {
  if (!wikipediaPage || wikipediaPage === "null") {
    return null;
  }
  const url = `https://en.wikipedia.org/wiki/${wikipediaPage}`;

  return (
    <GenericButtonLink
      url={url}
      Icon={LanguageIcon}
      tooltipTitle={`"${wikipediaPage}" on Wikipedia`}
    />
  );
}
