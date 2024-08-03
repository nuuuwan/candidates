import { IconButton, Tooltip } from "@mui/material";

export default function GenericButtonLink({ url, Icon, tooltipTitle }) {
  return (
    <Tooltip title={`${tooltipTitle} (${url})`}>
      <IconButton
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        size="small"
        sx={{ m: 0.1, p: 0 }}
      >
        <Icon fontSize="smaller" />
      </IconButton>
    </Tooltip>
  );
}
