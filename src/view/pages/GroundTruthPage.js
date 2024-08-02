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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { t } from "../../nonview/base/I18N";
import { Candidate, Criterion, GroundTruth } from "../../nonview/core";
import AppColors from "../../view/_constants/AppColors";
import AbstractInnerPage from "../../view/pages/AbstractInnerPage";

function WeightIcon({ weight }) {
  let Icon = HelpOutlineIcon;
  let color = "#ccc";
  if (weight > 0) {
    Icon = AddCircleOutlineIcon;
    color = "#080";
  } else if (weight < 0) {
    Icon = RemoveCircleOutlineIcon;
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
    const criterionToCandidateToWeightInfo =
      GroundTruth.getCriterionToCandidateToWeightInfo(version);
    return Object.entries(criterionToCandidateToWeightInfo).map(function ([
      criterionID,
      candidateToWeightInfo,
    ]) {
      const criterion = Criterion.fromId(criterionID);

      const weightToRefsToCandidates = GroundTruth.getWeightToRefsToCandidates(
        candidateToWeightInfo
      );

      return (
        <Box key={criterionID}>
          <Typography variant="h6">{`"${t(criterion.details)}"`}</Typography>
          <List sx={{ m: 0, p: 0 }}>
            {Object.entries(weightToRefsToCandidates)
              .sort(function (a, b) {
                return b[0] - a[0];
              })
              .map(function ([weight, refsToCandidateIds]) {
                return Object.entries(refsToCandidateIds)
                  .sort(function (a, b) {
                    return b[1].length - a[1].length;
                  })
                  .map(function ([refs, candidateIds]) {
                    const candidates = candidateIds.map(function (candidateId) {
                      return Candidate.fromId(candidateId);
                    });

                    if (candidates.length === 1) {
                      const candidate = candidates[0];
                      return (
                        <ListItem key={refs} sx={{ m: 0, p: 0.5 }}>
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
                            <Typography
                              variant="caption"
                              color={AppColors.Light}
                            >
                              {t(refs)}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      );
                    }

                    return (
                      <ListItem key={refs} sx={{ m: 0, p: 0.5 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ background: "white" }}>
                            <WeightIcon weight={weight} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          <Box>
                            {candidates.map(function (candidate) {
                              return (
                                <Typography
                                  variant="body2"
                                  key={"candidate-" + candidate.id}
                                  sx={{ fontSize: "67%" }}
                                >
                                  {t(candidate.firstName)}{" "}
                                  <strong>{t(candidate.lastName)}</strong>
                                </Typography>
                              );
                            })}
                          </Box>
                          <Typography variant="caption" color={AppColors.Light}>
                            {t(refs)}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    );
                  });
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
