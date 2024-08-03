import GoogleIcon from "@mui/icons-material/Google";
import GenericButtonLink from "./GenericButtonLink";
export default function ButtonGoogleSearch({ searchText }) {
  searchText = searchText.replaceAll(" ", "+");
  const url = `https://www.google.com/search?q=${searchText}`;

  return (
    <GenericButtonLink
      url={url}
      Icon={GoogleIcon}
      tooltipTitle={`Search for "${searchText}" on Google`}
    />
  );
}
