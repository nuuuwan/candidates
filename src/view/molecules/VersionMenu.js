import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CategoryIcon from "@mui/icons-material/Category";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";

const MESSAGE =
  "Hi Nuwan, I'd like to submit criteria for the PoliticiansLKApp";
const URL_MESSAGE =
  "https://twitter.com/messages/compose?recipient_id=57874373&text=" +
  MESSAGE.replace(" ", "+");

function MenuItemsForVersions({ onChangeVersion, context }) {
  const versions = GroundTruth.getVersions();
  const activeVersion = context.version;
  return (
    <>
      {versions.map(function (version) {
        const onClick = function () {
          onChangeVersion(version);
        };
        const isActive = activeVersion === version;

        return (
          <MenuItem key={"menu-" + version} onClick={onClick}>
            <ListItemIcon>{isActive ? <CategoryIcon /> : null}</ListItemIcon>
            <ListItemText>{version}</ListItemText>
          </MenuItem>
        );
      })}
    </>
  );
}

export default function VersionMenu({ onChangeVersion, context }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  const onClickSubmitOwn = function () {
    window.open(URL_MESSAGE, "_blank");
    onClose();
  };

  return (
    <Box>
      <Box>
        <IconButton onClick={onClick}>
          <CategoryIcon sx={{ color: "primary" }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
        <MenuItemsForVersions
          onChangeVersion={onChangeVersion}
          context={context}
        />
        <Divider />
        <MenuItem onClick={onClickSubmitOwn}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText>{t("Submit your own version")}</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
