import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import GroundTruth from "../../nonview/core/GroundTruth";

import AlignCenter from "../../view/atoms/AlignCenter";
import CandidatesLeaderBoardShort from "../../view/molecules/CandidatesLeaderBoardShort";
import HelpMenu from "./HelpMenu.js";

const STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 1,
};

export default function CustomAppBar({
  title,
  color,
  Icon,
  version,
  criterionToWeight,
  onChangeVersion,
  onChangeLang,
  onClickOpenPage,
}) {
  const candidateToWeightAndRank =
    GroundTruth.getSortedCandidateToWeightAndRank(version, criterionToWeight);

  return (
    <Box sx={STYLE}>
      <AppBar sx={{ backgroundColor: color }} elevation={10}>
        <Toolbar>
          <AlignCenter>
            <Icon sx={{ marginRight: 1 }} />
            <Typography variant="h6" component="div">
              {t(title)}
            </Typography>
          </AlignCenter>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {" "}
          </Typography>
          <CandidatesLeaderBoardShort
            candidateToWeightAndRank={candidateToWeightAndRank}
            onClickOpenPage={onClickOpenPage}
          />

          <HelpMenu onChangeLang={onChangeLang} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
