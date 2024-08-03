import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Candidate from "../../nonview/core/Candidate";

const AVATAR_SIZE = 24;
const MIN_WEIGHT = 1;
export default function CandidatesLeaderBoardShort({
  candidateToWeightAndRank,
  onClickOpenPage,
}) {
  if (Object.values(candidateToWeightAndRank)[0][1] < MIN_WEIGHT) {
    return null;
  }

  const onClick = function () {
    onClickOpenPage("CandidatePage");
  };

  return (
    <Stack direction="row" gap={1} onClick={onClick}>
      {Object.keys(candidateToWeightAndRank)
        .slice(0, 3)
        .map(function (candidateID) {
          const key = "candidate-" + candidateID;
          const candidate = Candidate.fromID(candidateID);
          return (
            <Avatar
              key={key}
              src={candidate.imgSrc}
              sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
            />
          );
        })}
    </Stack>
  );
}
