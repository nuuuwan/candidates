import { IconButton } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
export default function GoogleSearchView({ searchText }) {
  searchText = searchText.replaceAll(" ", "+");
  const url = `https://www.google.com/search?q=${searchText}`;

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
    >
      <GoogleIcon />
    </IconButton>
  );
}
