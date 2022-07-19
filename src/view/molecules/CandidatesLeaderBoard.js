import Stack from '@mui/material/Stack';
import CandidateView from "../../view/molecules/CandidateView"

export default function CandidatesLeaderBoard({candidateAndScore, refHomePage}) {
  return (
    <Stack gap={1} ref={refHomePage}>
      {candidateAndScore.map(
        function([candidateId, score]) {
          const key = "candidate-" + candidateId;
          return <CandidateView key={key} candidateId={candidateId} score={score} />;
        }
      )}
    </Stack>
  );
}
