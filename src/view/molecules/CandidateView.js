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
} from "../../view/atoms";
import PartyView from "../../view/molecules/PartyView";
import WeightView from "../../view/molecules/WeightView";
import AppColors from "../_constants/AppColors";
import { GroundTruth } from "../../nonview/core";
import CriterionToWeightView from "./CriterionToWeightView";

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

function CandidateListItemAvatar({ candidate, rank }) {
  return (
    <ListItemAvatar>
      <Typography variant="h6" sx={{ color: AppColors.Light }}>
        #{rank + 1}
      </Typography>

      <Avatar
        src={candidate.imgSrc}
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
    </ListItemAvatar>
  );
}

function CandidateListItemText({
  candidate,
  weight,
  criterionToWeight,
  criterionToWeightForCandidate,
}) {
  return (
    <ListItemText>
      <Stack direction="column" gap={0} sx={{ marginLeft: 2 }}>
        <Stack direction="row">
          <ProfileBox candidate={candidate} />
          <Typography sx={{ flexGrow: 1 }}> </Typography>
          <Box sx={{ marginLeft: 1 }}>
            <WeightView weight={weight} />
          </Box>
        </Stack>
        <CriterionToWeightView
          criterionToWeight={criterionToWeightForCandidate}
          label=""
        />{" "}
        <CriterionToWeightView
          criterionToWeight={criterionToWeight}
          label="(You)"
        />
      </Stack>
    </ListItemText>
  );
}

export default function CandidateView({
  version,
  candidateId,
  weight,
  rank,
  criterionToWeight,
}) {
  const candidate = Candidate.fromId(candidateId);
  const criterionToWeightForCandidate = GroundTruth.getCriterionToWeight(
    version,
    candidateId
  );
  return (
    <ListItem sx={{ marginBottom: 2, backgroundColor: AppColors.VeryLight }}>
      <CandidateListItemAvatar candidate={candidate} rank={rank} />
      <CandidateListItemText
        candidate={candidate}
        weight={weight}
        criterionToWeight={criterionToWeight}
        criterionToWeightForCandidate={criterionToWeightForCandidate}
      />
    </ListItem>
  );
}
