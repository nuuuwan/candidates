import { URLContext, I18N } from "../../nonview/base";
import GroundTruth from "../../nonview/core/GroundTruth";

export default class HomePageContext {
  constructor(lang, page, version, criterionWeights) {
    this.lang = lang;
    this.page = page;
    this.version = version;
    this.criterionWeights = criterionWeights;
  }

  toURL() {
    I18N.setLang(this.lang);
    URLContext.setContext({
      lang: this.lang,
      page: this.page,
      version: this.version,
      criterionWeights_: JSON.stringify(this.criterionWeights),
    });
  }

  // loaders

  static DEFAULT = {
    LANG: I18N.BASE_LANG,
    PAGE: "CriteriaPage",
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
      context.criterionWeightsJSON
        ? JSON.parse(context.criterionWeights_)
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
