import {
  Alert,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { t } from "../../nonview/base/I18N";
import { Candidate, Criterion, GroundTruth } from "../../nonview/core";
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

function WeightIcon({ weight }) {
  let Icon = HelpOutlineIcon;
  let color = "#ccc";
  if (weight > 0) {
    Icon = CheckCircleOutlineIcon;
    color = "#080";
  } else if (weight < 0) {
    Icon = HighlightOffIcon;
    color = "#f00";
  }
  return <Icon sx={{ color }} />;
}

export default class GroundTruthPage extends AbstractInnerPage {
  get page() {
    return "GroundTruthPage";
  }
  get Icon() {
    return StorageIcon;
  }

  get label() {
    return "Ground Truth";
  }

  get color() {
    return AppColors.GroundTruth;
  }

  renderList() {
    const { version } = this.props;
    const criterionToCandidateToWeight =
      GroundTruth.getCriterionToCandidateToWeight(version);
    return Object.entries(criterionToCandidateToWeight).map(function ([
      criterionID,
      candidateToWeight,
    ]) {
      const criterion = Criterion.fromId(criterionID);
      return (
        <Box key={criterionID}>
          <Typography variant="h6">{`"${t(criterion.details)}"`}</Typography>
          <List sx={{ m: 0, p: 0 }}>
            {Object.entries(candidateToWeight).map(function ([
              candidateID,
              weight,
            ]) {
              const candidate = Candidate.fromId(candidateID);
              return (
                <ListItem key={candidateID} sx={{ m: 0, p: 0.5 }}>
                  <ListItemAvatar>
                    <Avatar sx={{ background: "white" }}>
                      <WeightIcon weight={weight} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="body2">
                      {t(candidate.firstName)}{" "}
                      <strong>{t(candidate.lastName)}</strong>
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
      );
    });
  }

  render() {
    return (
      <Box>
        <Alert severity="info">
          {t("This tool uses the following dataset as Ground Truth.")}
        </Alert>
        <Stack spacing={2} sx={{ m: 1, p: 1 }}>
          {this.renderList()}
        </Stack>
      </Box>
    );
  }
}
