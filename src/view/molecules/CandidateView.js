import {
  Avatar,
  Box,
  Paper,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { t } from "../../nonview/base/I18N";
import Candidate from "../../nonview/core/Candidate";
import {
  WikipediaPageView,
  XHandleView,
  GoogleSearchView,
  ParliamentView,
  LinkedInView,
  ManthriLKView,
} from "../../view/atoms";
import PartyView from "../../view/molecules/PartyView";
import WeightView from "../../view/molecules/WeightView";
import AppColors from "../_constants/AppColors";

const AVATAR_SIZE = 64;

function ProfileBox({ candidate }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "80%" }}>{t(candidate.firstName)}</Typography>
      <Typography sx={{ fontSize: "120%" }}>{t(candidate.lastName)}</Typography>
      <PartyView id={candidate.party} />
      <ParliamentView parliamentNum={candidate.parliamentNum} />
      <ManthriLKView manthriLKID={candidate.manthriLKID} />
      <WikipediaPageView wikipediaPage={candidate.wikipediaPage} />
      <LinkedInView linkedInID={candidate.linkedInID} />
      <XHandleView xHandle={candidate.xHandle} />
      <GoogleSearchView searchText={candidate.fullName} />
    </Box>
  );
}

export default function CandidateView({ candidateId, weight, rank }) {
  const candidate = Candidate.fromId(candidateId);
  return (
    <ListItem component={Paper} sx={{ marginBottom: 2 }}>
      <ListItemAvatar>
        <Typography variant="h6" sx={{ color: AppColors.Light }}>
          #{rank + 1}
        </Typography>

        <Avatar
          src={candidate.imgSrc}
          sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
        />
      </ListItemAvatar>

      <ListItemText>
        <Stack direction="row" sx={{ marginLeft: 2 }}>
          <ProfileBox candidate={candidate} />
          <Typography sx={{ flexGrow: 1 }}> </Typography>
          <Box sx={{ marginLeft: 1 }}>
            <WeightView weight={weight} />
          </Box>
        </Stack>
      </ListItemText>
    </ListItem>
  );
}
