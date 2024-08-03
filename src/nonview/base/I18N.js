import DICTIONARY from "../../nonview/base/DICTIONARY";
import IDX from "../../nonview/base/IDX";

import SriLankaColors from "../../view/_constants/SriLankaColors";

const CACHE_KEY_LANG = "CACHE_KEY_LANG";

class Lang {
  constructor(lang, label, labelEn, shortLabel, color) {
    this.lang = lang;
    this.label = label;
    this.labelEn = labelEn;
    this.shortLabel = shortLabel;
    this.color = color;
  }
}

export const LANG_LIST = [
  new Lang("si", "සිංහල", "Sinhala", "සිං", SriLankaColors.Sinhala),
  new Lang("ta", "தமிழ்", "Tamil", "த", SriLankaColors.Tamil),
  new Lang("en", "English", "English", "En", SriLankaColors.Muslim),
];

export const LANG_IDX = IDX.build(
  LANG_LIST,
  (d) => d.lang,
  (d) => d
);

export default class I18N {
  static BASE_LANG = "en";

  static getLang() {
    let browserLang = localStorage.getItem(CACHE_KEY_LANG);
    if (!browserLang) {
      browserLang = "en";
      localStorage.setItem(CACHE_KEY_LANG, browserLang);
    }
    return browserLang;
  }

  static setLang(browserLang) {
    localStorage.setItem(CACHE_KEY_LANG, browserLang);
  }

  static translate(s) {
    if (!s) {
      return "";
    }
    s = s.trim();
    if (!s.trim()) {
      return s;
    }

    const currentLang = I18N.getLang();
    if (currentLang === I18N.BASE_LANG) {
      return s;
    }

    const entry = DICTIONARY[s];
    if (!entry) {
      console.error(`No DICTIONARY entry for: '${s}'`);
      return s;
    }

    const translation = entry[currentLang];
    if (!translation) {
      console.error(`No ${currentLang} translation for: '${s}'`);
      return s;
    }

    return translation;
  }
}

export function t(
  s,
  value0 = undefined,
  value1 = undefined,
  value2 = undefined,
  value3 = undefined
) {
  let translatedS = I18N.translate(s);
  if (value0 !== undefined) {
    translatedS = translatedS.replaceAll("000", value0);
  }
  if (value1 !== undefined) {
    translatedS = translatedS.replaceAll("001", value1);
  }
  if (value2 !== undefined) {
    translatedS = translatedS.replaceAll("002", value2);
  }
  if (value3 !== undefined) {
    translatedS = translatedS.replaceAll("003", value3);
  }
  return translatedS;
}
