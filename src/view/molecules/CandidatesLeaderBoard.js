import CandidateView from "../../view/molecules/CandidateView";
import { List } from "@mui/material";

export default function CandidatesLeaderBoard({ candidateWeightAndRank }) {
  return (
    <List>
      {candidateWeightAndRank.map(function ([candidateId, score, rank]) {
        const key = "candidate-" + candidateId;
        return (
          <CandidateView
            key={key}
            candidateId={candidateId}
            score={score}
            rank={rank}
          />
        );
      })}
    </List>
  );
}
