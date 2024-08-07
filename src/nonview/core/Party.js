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
    return PARTY_IDX[id] || new Party(id, "gray");
  }

  get imgSrc() {
    return process.env.PUBLIC_URL + "/images/parties/logo_" + this.id + ".png";
  }
}

const PARTY_D_LIST = [
  { id: "UNP", color: "darkgreen" },
  { id: "SJB", color: "green" },
  { id: "SLPP", color: "maroon" },
  { id: "SLFP", color: "blue" },
  { id: "ITAK", color: "yellow" },
  { id: "NPP", color: "red" },
  { id: "JVP", color: "red" },
  { id: "UCPF", color: "#f40" },
  { id: "MEP", color: "red" },
  { id: "EPDP", color: "red" },
  { id: "TPA", color: "#f80" },
  { id: "Independent", color: "gray" },
  { id: "SLMC", color: "#041" },
  { id: "FSP", color: "red" },
];

const PARTY_LIST = PARTY_D_LIST.map((d) => Party.fromDict(d));
const PARTY_IDX = IDX.build(
  PARTY_LIST,
  (x) => x.id,
  (x) => x
);
