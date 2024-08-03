import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GenericButtonLink from "./GenericButtonLink";
export default function ButtonLinkedIn({ linkedInID }) {
  if (!linkedInID || linkedInID === "null") {
    return null;
  }
  const url = `https://www.linkedin.com/in/${linkedInID}/`;

  return (
    <GenericButtonLink
      url={url}
      Icon={LinkedInIcon}
      tooltipTitle={`"${linkedInID}" on LinkedIn`}
    />
  );
}
