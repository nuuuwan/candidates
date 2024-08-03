import XIcon from "@mui/icons-material/X";
import GenericButtonLink from "./GenericButtonLink";

export default function ButtonXTwitter({ xHandle }) {
  if (!xHandle || xHandle === "null") {
    return null;
  }
  const url = `https://x.com/${xHandle}`;

  return (
    <GenericButtonLink
      url={url}
      Icon={XIcon}
      tooltipTitle={`"@${xHandle}" on X`}
    />
  );
}
