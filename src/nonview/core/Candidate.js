import IDX from "../../nonview/base/IDX";
import { CANDIDATE_D_LIST } from "../../nonview/data/CANDIDATE_D_LIST";

export default class Candidate {
  constructor(
    id,
    firstName,
    lastName,
    party,
    imgFile,
    xHandle,
    wikipediaPage,
    parliamentNum
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.party = party;
    this.imgFile = imgFile;
    this.xHandle = xHandle;
    this.wikipediaPage = wikipediaPage;
    this.parliamentNum = parliamentNum;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  static fromDict(d) {
    return new Candidate(
      d.id,
      d.firstName,
      d.lastName,
      d.party,
      d.imgFile,
      d.xHandle,
      d.wikipediaPage,
      d.parliamentNum
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
