import IDX from "../../nonview/base/IDX"
export default class Candidate {
  constructor(id, firstName, lastName, twtrHandle, imgSrc, party) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.twtrHandle = twtrHandle;
    this.imgSrc = imgSrc;
    this.party = party;
  }

  static fromDict(d) {
    return new Candidate(
      d.id,
      d.firstName,
      d.lastName,
      d.twtrHandle,
      d.imgSrc,
      d.party
    );
  }

  static fromId(id) {
    return CANDIDATE_IDX[id];
  }

}

const CANDIDATE_D_LIST = [
  {
    id: "RW",
    firstName: "Ranil",
    lastName: "Wickramasinghe",
    twtrHandle: "RW_UNP",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/1244.jpg",
    party: "UNP",
  },
  {
    id: "SP",
    firstName: "Sajith",
    lastName: "Premadasa",
    twtrHandle: "SajithPremadasa",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/140.jpg",
    party: "SJB",
  },
  {
    id: "SF",
    firstName: "Sarath",
    lastName: "Fonseka",
    twtrHandle: "GeneralFonseka",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3135.jpg",
    party: "SJB",
  },
  {
    id: "MAS",
    firstName: "Mathiaparanan Abraham",
    lastName: "Sumanthiran",
    twtrHandle: "MASumanthiran",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3194.jpg",
    party: "TNA",
  },
  {
    id: "DA",
    firstName: "Dullas",
    lastName: "Alahapperuma",
    twtrHandle: "DullasOfficial",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/2868.jpg",

    party: "SLPP",
  },
  {
    id: "HdS",
    firstName: "Harsha",
    lastName: "de Silva",
    twtrHandle: "HarshadeSilvaMP",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3201.jpg",
    party: "SJB",
  },
  {
    id: "AKD",
    firstName: "Anura Kumara",
    lastName: "Disanayake",
    twtrHandle: "AnuraDisanayake",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/112.jpg",
    party: "JVP",
  },
  {
    id: "MS",
    firstName: "Maithripala",
    lastName: "Sirisena",
    twtrHandle: "MaithripalaS",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/191.jpg",
    party: "SLFP",
  },
  {
    id: "PCR",
    firstName: "Patali Champika",
    lastName: "Ranawaka",
    twtrHandle: "PCRanawaka",
    imgSrc:
      "https://www.parliament.lk/uploads/images/members/profile_images/thumbs/3076.jpg",
    party: "SJB",
  },
];

export const CANDIDATE_LIST = CANDIDATE_D_LIST.map((d) =>
  Candidate.fromDict(d)
);

export const CANDIDATE_IDX = IDX.build(
    CANDIDATE_LIST,
    x => x.id,
    x => x,
)
