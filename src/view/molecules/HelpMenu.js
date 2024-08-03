import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BugReportIcon from "@mui/icons-material/BugReport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

import I18N, { t, LANG_LIST } from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";
import AppColors from "../_constants/AppColors";
import { Typography } from "@mui/material";
import { VERSION } from "../../nonview/constants";

const MENU_ITEM_LIST = [
  {
    name: "Code Repository",
    url: "http://github.com/nuuuwan/candidates",
    Icon: GitHubIcon,
  },
  {
    name: "Report Bugs",
    url: "https://github.com/nuuuwan/candidates/issues",
    Icon: BugReportIcon,
  },
];

function MenuItemCopyAppLink() {
  const onClickCopy = function () {
    navigator.clipboard.writeText(URLContext.getURL());
  };

  return (
    <MenuItem onClick={onClickCopy}>
      <ListItemIcon>
        <ContentCopyIcon />
      </ListItemIcon>
      <ListItemText>{t("Copy App Link")}</ListItemText>
    </MenuItem>
  );
}

function MenuItemClearCache() {
  const onClickClearCache = function () {
    localStorage.clear();
    window.location.reload(true);
  };
  return (
    <MenuItem onClick={onClickClearCache}>
      <ListItemIcon>
        <AutorenewIcon />
      </ListItemIcon>
      <ListItemText>{t("Clear Local Cache")}</ListItemText>
    </MenuItem>
  );
}

function MenuItemsForLang({ onChangeLang }) {
  return (
    <>
      {LANG_LIST.map(function (lang, iLang) {
        const currentLang = I18N.getLang();
        if (currentLang === lang.lang) {
          return null;
        }

        const onClick = function () {
          onChangeLang(lang.lang);
        };

        return (
          <MenuItem key={"lang-" + iLang} onClick={onClick}>
            <ListItemIcon>
              <LanguageIcon sx={{ color: lang.color }} />
            </ListItemIcon>
            <ListItemText sx={{ color: lang.color }}>{lang.label}</ListItemText>
          </MenuItem>
        );
      })}
    </>
  );
}

function MenuItemsForLinks({ onClose }) {
  return (
    <>
      {MENU_ITEM_LIST.map(function (menuItem, i) {
        const key = "app-bar-menu-item-" + i;
        const Icon = menuItem.Icon;
        const onClick = function (e) {
          window.open(menuItem.url, "_blank");
          onClose();
        };

        return (
          <MenuItem key={key} onClick={onClick}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>{t(menuItem.name)}</ListItemText>
          </MenuItem>
        );
      })}
    </>
  );
}

export default function HelpMenu({ onChangeLang }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onClick = function (e) {
    setAnchorEl(e.currentTarget);
  };

  const onClose = function () {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box>
        <IconButton onClick={onClick}>
          <SettingsIcon sx={{ color: "primary" }} />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
        <MenuItemsForLang onChangeLang={onChangeLang} />
        <Divider />
        <MenuItemsForLinks onClose={onClose} />
        <Divider />
        <MenuItemCopyAppLink />
        <MenuItemClearCache />
        <Typography
          variant="caption"
          color={AppColors.MoreLight}
          fontSize="100%"
          sx={{ marginLeft: 2 }}
        >
          {t("v000", VERSION.DATETIME_STR)}
        </Typography>
      </Menu>
    </Box>
  );
}
