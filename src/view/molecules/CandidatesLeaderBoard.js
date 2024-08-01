import CandidateView from "../../view/molecules/CandidateView";
import { List } from "@mui/material";

export default function CandidatesLeaderBoard({
  candidateScoreAndRank,
  refHomePage,
}) {
  return (
    <List ref={refHomePage}>
      {candidateScoreAndRank.map(function ([candidateId, score, rank]) {
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
