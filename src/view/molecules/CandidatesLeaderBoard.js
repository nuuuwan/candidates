import CandidateView from "../../view/molecules/CandidateView";
import { List } from "@mui/material";

export default function CandidatesLeaderBoard({
  candidateToWeightAndRank,
  version,
  criterionToWeight,
}) {
  return (
    <List>
      {Object.entries(candidateToWeightAndRank).map(function ([
        candidateId,
        { weight, rank },
      ]) {
        const key = "candidate-" + candidateId;
        return (
          <CandidateView
            key={key}
            version={version}
            candidateId={candidateId}
            weight={weight}
            rank={rank}
            criterionToWeight={criterionToWeight}
          />
        );
      })}
    </List>
  );
}
