import { t } from "../../nonview/base/I18N";

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
        candidateID,
        { weight, rank },
      ]) {
        const key = "candidate-" + candidateID;
        return (
          <CandidateView
            key={key}
            version={version}
            candidateID={candidateID}
            weight={weight}
            rank={rank}
            criterionToWeight={criterionToWeight}
          />
        );
      })}
    </List>
  );
}
