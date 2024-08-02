import CandidateView from "../../view/molecules/CandidateView";
import { List } from "@mui/material";

export default function CandidatesLeaderBoard({ candidateToWeightAndRank }) {
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
            candidateId={candidateId}
            weight={weight}
            rank={rank}
          />
        );
      })}
    </List>
  );
}
