import Card from '@mui/material/Card';
import Candidate from "../../nonview/core/Candidate"
import WeightView from "../../view/molecules/WeightView"
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
export default function CandidateView({candidateId, score}) {
  const candidate = Candidate.fromId(candidateId);
  return (
    <Card sx={{m: 1, p: 1}}>
       <Avatar src={candidate.imgSrc} />
      <Typography variant="caption">
        {candidate.firstName}
      </Typography>
      <Typography variant="h6">
        {candidate.lastName}
      </Typography>
      <Typography variant="caption">
        {candidate.party}
      </Typography>
      
      <WeightView weight={score} />
    </Card>
  );
}
