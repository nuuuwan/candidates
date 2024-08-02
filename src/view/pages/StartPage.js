import StartIcon from "@mui/icons-material/Start";
import AppColors from "../_constants/AppColors";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import AbstractInnerPage from "./AbstractInnerPage";
import {
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

function CustomListItem({ Icon, color, text, subText }) {
  return (
    <ListItem>
      <ListItemIcon>
        <Icon sx={{ color }} />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body1" color={color}>
          {text}
        </Typography>{" "}
        <Typography variant="caption" color={color}>
          {subText}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}

export default class StartPage extends AbstractInnerPage {
  get page() {
    return "StartPage";
  }
  get Icon() {
    return StartIcon;
  }

  get label() {
    return "Start";
  }

  get color() {
    return AppColors.Start;
  }

  render() {
    return (
      <Stack direction="column" gap={1}>
        <Typography variant="body1">
          Suppose you want to pick a candidate to vote for in the upcoming 2024
          Sri Lankan Presidential Election.
        </Typography>
        <Typography variant="h6">
          How might you pick your candidate rationally?
        </Typography>{" "}
        <Typography variant="body1">
          Rationally picking a Candidate to vote for, is a three-step process.
        </Typography>
        <List>
          <CustomListItem
            Icon={LooksOneIcon}
            color={AppColors.Criterion}
            text="Identify and Weight the criteria you care about."
            subText="That is, what you want to see in a candidate."
          />

          <CustomListItem
            Icon={LooksTwoIcon}
            color={AppColors.GroundTruth}
            text="Learn how each candidate matches up to those criteria."
          />

          <CustomListItem
            Icon={Looks3Icon}
            color={AppColors.Candidate}
            text="Find out which candidate is the best match."
          />
        </List>
      </Stack>
    );
  }
}
