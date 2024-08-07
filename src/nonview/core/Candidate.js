import IDX from "../../nonview/base/IDX";
import { CANDIDATE_D_LIST } from "../../nonview/data/CANDIDATE_D_LIST";

export default class Candidate {
  constructor(
    regNum,
    regDate,
    id,
    firstNameShort,
    firstNames,
    lastName,
    gender,
    party,
    support,
    imgFile,
    xHandle,
    wikipediaPage,
    parliamentNum,
    linkedInID,
    manthriLKID
  ) {
    this.regNum = regNum;
    this.regDate = regDate;
    this.id = id;
    this.firstNameShort = firstNameShort;
    this.firstNames = firstNames;
    this.lastName = lastName;
    this.gender = gender;
    this.party = party;
    this.support = support;
    this.imgFile = imgFile;
    this.xHandle = xHandle;
    this.wikipediaPage = wikipediaPage;
    this.parliamentNum = parliamentNum;
    this.linkedInID = linkedInID;
    this.manthriLKID = manthriLKID;
  }
  get fullName() {
    return this.firstNameShort + " " + this.lastName;
  }

  static fromDict(d) {
    return new Candidate(
      d.regNum,
      d.regDate,
      d.id,
      d.firstNameShort,
      d.firstNames,
      d.lastName,
      d.gender,
      d.party,
      d.support,
      d.imgFile,
      d.xHandle,
      d.wikipediaPage,
      d.parliamentNum,
      d.linkedInID,
      d.manthriLKID
    );
  }

  static fromID(id) {
    return CANDIDATE_IDX[id];
  }

  get imgSrc() {
    return process.env.PUBLIC_URL + "/images/candidates/" + this.imgFile;
  }

  get depositInfo() {
    if (!this.regDate || this.regDate === "null") {
      return "No Deposit (as of 2024-08-06)";
    }
    return `Deposit accepted ${this.regDate}`;
  }
}

export const CANDIDATE_LIST = CANDIDATE_D_LIST.map((d) =>
  Candidate.fromDict(d)
).sort(
  (a, b) =>
    a.lastName.localeCompare(b.lastName) ||
    a.firstNameShort.localeCompare(b.firstNameShort)
);

export const CANDIDATE_IDX = IDX.build(
  CANDIDATE_LIST,
  (x) => x.id,
  (x) => x
);

export const CANDIDATE_IDS = Object.keys(CANDIDATE_IDX);
