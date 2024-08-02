import { URLContext, I18N } from "../../nonview/base";
import GroundTruth from "../../nonview/core/GroundTruth";

export default class HomePageContext {
  constructor(lang, page, version, criterionToWeight) {
    this.lang = lang;
    this.page = page;
    this.version = version;
    this.criterionToWeight = criterionToWeight;
  }

  static customEncode(data) {
    return btoa(JSON.stringify(data));
  }

  static customDecode(jsonLike) {
    return JSON.parse(atob(jsonLike));
  }

  toURL() {
    I18N.setLang(this.lang);
    URLContext.setContext({
      lang: this.lang,
      page: this.page,
      version: this.version,
      criterionToWeightEncoded: HomePageContext.customEncode(
        this.criterionToWeight
      ),
    });
  }

  // loaders

  static DEFAULT = {
    LANG: I18N.BASE_LANG,
    PAGE: "StartPage",
    VERSION: GroundTruth.DEFAULT_VERSION,
    CRITERION_WEIGHTS: GroundTruth.getInitCriterionWeights(
      GroundTruth.DEFAULT_VERSION
    ),
  };

  static fromURL() {
    const context = URLContext.getContext();

    return new HomePageContext(
      context.lang || HomePageContext.DEFAULT.LANG,
      context.page || HomePageContext.DEFAULT.PAGE,
      context.version || HomePageContext.DEFAULT.VERSION,
      context.criterionToWeightEncoded
        ? HomePageContext.customDecode(context.criterionToWeightEncoded)
        : HomePageContext.DEFAULT.CRITERION_WEIGHTS
    );
  }

  // state
  static updateState(homePage, updater) {
    let { context } = homePage.state;
    updater(context);
    context.toURL();
    homePage.setState({ context });
  }
}
