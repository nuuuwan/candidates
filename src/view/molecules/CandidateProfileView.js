import { Avatar, Box, ListItemAvatar, Stack, Typography } from "@mui/material";

import { t } from "../../nonview/base/I18N";
import Candidate from "../../nonview/core/Candidate";
import {
  ButtonWikipedia,
  ButtonXTwitter,
  ButtonGoogleSearch,
  ButtonParliamentLK,
  ButtonLinkedIn,
  ButtonManthriLK,
} from "../atoms";
import CriterionToWeightView from "../../view/molecules/CriterionToWeightView";
import PartyView from "./PartyView";

import AppColors from "../_constants/AppColors";
import { GroundTruth } from "../../nonview/core";

const AVATAR_SIZE = 48;

function ProfileTextView({ candidate }) {
  return (
    <Box>
      <Typography sx={{ fontSize: "80%" }}>{t(candidate.firstName)}</Typography>
      <Typography sx={{ fontSize: "120%" }}>{t(candidate.lastName)}</Typography>
      <PartyView id={candidate.party} />
      <ButtonParliamentLK parliamentNum={candidate.parliamentNum} />
      <ButtonManthriLK manthriLKID={candidate.manthriLKID} />
      <ButtonWikipedia wikipediaPage={candidate.wikipediaPage} />
      <ButtonLinkedIn linkedInID={candidate.linkedInID} />
      <ButtonXTwitter xHandle={candidate.xHandle} />
      <ButtonGoogleSearch searchText={candidate.fullName} />
    </Box>
  );
}

function ProfileAvatarView({ candidate }) {
  return (
    <ListItemAvatar>
      <Avatar
        src={candidate.imgSrc}
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      />
    </ListItemAvatar>
  );
}

export default function CandidateProfileView({ candidateID, version, custom }) {
  const candidate = Candidate.fromID(candidateID);
  const criterionToWeight = GroundTruth.getCriterionToWeightForCandidate(
    version,
    candidateID
  );
  return (
    <Box sx={{ marginBottom: 2, backgroundColor: AppColors.VeryLight }}>
      <Stack direction="row" gap={1}>
        <ProfileAvatarView candidate={candidate} />
        <Stack direction="column" gap={1}>
          <ProfileTextView
            candidate={candidate}
            criterionToWeight={criterionToWeight}
          />{" "}
          <CriterionToWeightView
            criterionToWeight={criterionToWeight}
            label={candidate.id}
          />
          {custom}
        </Stack>
      </Stack>
    </Box>
  );
}
