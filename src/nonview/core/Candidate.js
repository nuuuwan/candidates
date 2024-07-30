import IDX from "../../nonview/base/IDX";

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

const CANDIDATE_D_LIST = [
  {
    id: "RW",
    firstName: "Ranil",
    lastName: "Wickramasinghe",
    twtrHandle: "RW_UNP",
    imgFile: "1244.jpg",
    party: "UNP",
  },
  {
    id: "SP",
    firstName: "Sajith",
    lastName: "Premadasa",
    twtrHandle: "SajithPremadasa",
    imgFile: "140.jpg",
    party: "SJB",
  },
  {
    id: "SF",
    firstName: "Sarath",
    lastName: "Fonseka",
    twtrHandle: "GeneralFonseka",
    imgFile: "3135.jpg",
    party: "Ind",
  },
  {
    id: "MAS",
    firstName: "Mathiaparanan Abraham",
    lastName: "Sumanthiran",
    twtrHandle: "MASumanthiran",
    imgFile: "3194.jpg",
    party: "ITAK",
  },

  {
    id: "AKD",
    firstName: "Anura Kumara",
    lastName: "Disanayake",
    twtrHandle: "AnuraDisanayake",
    imgFile: "112.jpg",
    party: "NPP",
  },

  // Added 2024
  {
    id: "WR",
    firstName: "Wijeyadasa",
    lastName: "Rajapakshe",
    twtrHandle: "WijeRajapakshe",
    imgFile: "1521.jpg",
    party: "SLFP",
  },
  {
    id: "JR",
    firstName: "Janaka",
    lastName: "Ratnayake",
    twtrHandle: "",
    imgFile: "JR.jpg",
    party: "Ind",
  },
  {
    id: "SK",
    firstName: "Sarath",
    lastName: "Keerthirathna",
    twtrHandle: "SK.jpg",
    imgFile: "",
    party: "Ind",
  },
  {
    id: "OH",
    firstName: "Oshala",
    lastName: "Herath",
    twtrHandle: "@OshalaHerath",
    imgFile: "",
    party: "NIF",
  },
  {
    id: "ASPL",
    firstName: "ASP",
    lastName: "Liyanage",
    twtrHandle: "",
    imgFile: "ASPL.png",
    party: "SLLP",
  },
  {
    id: "NB",
    firstName: "Nuwan",
    lastName: "Bopage",
    twtrHandle: "",
    imgFile: "NB.png",
    party: "PSA",
  },
];

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
