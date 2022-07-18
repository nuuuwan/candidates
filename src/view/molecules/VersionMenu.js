import React, { useState } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from '@mui/icons-material/Category';

import GroundTruth from "../../nonview/core/GroundTruth"
import AppColors from "../../view/_constants/AppColors"


export default function HelpMenu({onChangeVersion, context}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  const versions = GroundTruth.getVersions();
  const activeVersion = context.version;
  return (
    <Box>
      <Box>
        <IconButton onClick={onClick}>
          <CategoryIcon sx={{ color: "primary" }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
        {versions.map(function (version) {
          const onClick = function () {
            onChangeVersion(version);
          };
          const isActive = activeVersion === version;
          const color = isActive ? AppColors.Primary : AppColors.VeryLight;

          return (
            <MenuItem key={"menu-" + version} onClick={onClick}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText sx={{color}}>
                {version}
              </ListItemText>
            </MenuItem>
          );
        })}

      </Menu>
    </Box>
  );
}
