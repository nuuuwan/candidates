import Tooltip from "@mui/material/Tooltip";
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
export default function ScreenshotView() {
  return (
    <Tooltip title={"Screenshot"}>
      <BottomNavigationAction
        icon={<ScreenshotIcon/>}
      />
    </Tooltip>
  );
}
