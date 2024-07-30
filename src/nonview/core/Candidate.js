import IDX from "../../nonview/base/IDX";
import { CANDIDATE_D_LIST } from "../../nonview/data/CANDIDATE_D_LIST";

export default class Candidate {
  constructor(id, firstName, lastName, twtrHandle, imgFile, party) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.twtrHandle = twtrHandle;
    this.imgFile = imgFile;
    this.party = party;
  }

  static fromDict(d) {
    return new Candidate(
      d.id,
      d.firstName,
      d.lastName,
      d.twtrHandle,
      d.imgFile,
      d.party
    );
  }

  static fromId(id) {
    return CANDIDATE_IDX[id];
  }

  get imgSrc() {
    return process.env.PUBLIC_URL + "/images/candidates/" + this.imgFile;
  }
}

export const CANDIDATE_LIST = CANDIDATE_D_LIST.map((d) =>
  Candidate.fromDict(d)
);

export const CANDIDATE_IDX = IDX.build(
  CANDIDATE_LIST,
  (x) => x.id,
  (x) => x
);

for (const d of CANDIDATE_D_LIST) {
  console.debug(
    d.id,
    d.firstName,
    d.lastName,
    d.twtrHandle,
    d.imgFile,
    d.party
  );
}
