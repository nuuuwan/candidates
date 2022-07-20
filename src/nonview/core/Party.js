import IDX from "../../nonview/base/IDX";

export default class Party {
  constructor(id, color, imgFile) {
    this.id = id;
    this.color = color;
    this.imgFile = imgFile;
  }

  static fromDict(d) {
    return new Party(d.id, d.color, d.imgFile);
  }

  static fromID(id) {
    return PARTY_IDX[id];
  }

  get imgSrc() {
    return process.env.PUBLIC_URL + "/images/parties/" + this.imgFile;
  }
}

const PARTY_D_LIST = [
  { id: "UNP", color: "darkgreen", imgFile: "UNP.png" },
  { id: "SJB", color: "darkgreen", imgFile: "SJB.png" },
  { id: "SLPP", color: "maroon", imgFile: "SLPP.png" },
  { id: "SLFP", color: "blue", imgFile: "SLFP.png" },
  { id: "TNA", color: "yellow", imgFile: "TNA.png" },
  { id: "JVP", color: "red", imgFile: "JVP.png" },
];

const PARTY_LIST = PARTY_D_LIST.map((d) => Party.fromDict(d));
const PARTY_IDX = IDX.build(
  PARTY_LIST,
  (x) => x.id,
  (x) => x
);
