import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import GenericButtonLink from "./GenericButtonLink";
export default function ButtonManthriLK({ manthriLKID }) {
  if (!manthriLKID || manthriLKID === "null") {
    return null;
  }
  const url = `https://manthri.lk/en/politicians/${manthriLKID}/`;

  return (
    <GenericButtonLink
      url={url}
      Icon={DownloadDoneIcon}
      tooltipTitle={`"${manthriLKID}" on Manthri.lk`}
    />
  );
}
