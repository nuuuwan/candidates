import GroundTruth from "../../nonview/core/GroundTruth";
export default function CriteriaView({ version }) {
  const criteria = GroundTruth.getCriteria(version);
  return <>{JSON.stringify(criteria)}</>;
}
