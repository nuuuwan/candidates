import Stack from '@mui/material/Stack';

import Candidate from "../../nonview/core/Candidate"
import Avatar from '@mui/material/Avatar';
const AVATAR_SIZE = 24;
const MIN_SCORE = 1;
export default function CandidatesLeaderBoardShort({candidateScoreAndRank}) {
  if (candidateScoreAndRank[0][1] < MIN_SCORE) {
    return null;
  }
  return (
    <Stack direction="row" gap={1}>
      {candidateScoreAndRank.slice(0, 3).map(
        function([candidateId, score, rank]) {
          const key = 'candidate-' + candidateId;
          const candidate = Candidate.fromId(candidateId);
          return <Avatar key={key} src={candidate.imgSrc} sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}/>;
        }
      )}
    </Stack>
  );
}
