import {
  Avatar,
  Box,
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
} from "../atoms";
import CriterionToWeightView from "../../view/molecules/CriterionToWeightView";
import PartyView from "./PartyView";

import AppColors from "../_constants/AppColors";
import { GroundTruth } from "../../nonview/core";

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

function CandidateListItemAvatar({ candidate }) {
  return (
    <ListItemAvatar>
      <Avatar
        src={candidate.imgSrc}
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
    </ListItemAvatar>
  );
}

function CandidateListItemText({ candidate, criterionToWeight }) {
  return (
    <ListItemText>
      <Stack direction="column" gap={0} sx={{ marginLeft: 2 }}>
        <ProfileBox candidate={candidate} />
        <CriterionToWeightView criterionToWeight={criterionToWeight} />
      </Stack>
    </ListItemText>
  );
}

export default function CandidateProfileView({ candidateID, version }) {
  const candidate = Candidate.fromID(candidateID);
  const criterionToWeight = GroundTruth.getCriterionToWeightForCandidate(
    version,
    candidateID
  );
  return (
    <ListItem sx={{ marginBottom: 2, backgroundColor: AppColors.VeryLight }}>
      <CandidateListItemAvatar candidate={candidate} />
      <CandidateListItemText
        candidate={candidate}
        criterionToWeight={criterionToWeight}
      />
    </ListItem>
  );
}
