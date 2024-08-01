import { Component, version } from "react";
import React from "react";
import Box from "@mui/material/Box";

import AudioX from "../../nonview/base/AudioX";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";

import GroundTruth from "../../nonview/core/GroundTruth";
import PAGE_CONFIG_LIST from "../../view/pages/PAGE_CONFIG_LIST";
import HomePageContext from "../../nonview/core/HomePageContext";

const STYLE_INNER_PAGE_BOX = {
  marginTop: 10,
  padding: 2,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = HomePageContext.fromURL();
    this.state = {
      context,
    };
    this.isComponentMounted = false;
    context.toURL();
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  onClickOpenPage(page) {
    AudioX.playShort();

    HomePageContext.updateState(this, function (context) {
      context.page = page;
    });

    window.scrollTo(0, 0);
  }

  getInnerPageConfig() {
    let { context } = this.state;

    for (let config of PAGE_CONFIG_LIST) {
      if (config.page === context.page) {
        return config;
      }
    }
    throw new Error("Invalid page: " + context.page);
  }

  onChangeCriterionWeight(iCriterion, criterionWeight) {
    HomePageContext.updateState(this, function (context) {
      context.criterionToWeight[iCriterion] = criterionWeight;
    });
  }

  onChangeVersion(version) {
    HomePageContext.updateState(this, function (context) {
      context.version = version;
      context.criterionToWeight = GroundTruth.getInitCriterionWeights(
        context.version
      );
    });
  }

  onChangeLang(lang) {
    HomePageContext.updateState(this, function (context) {
      context.lang = lang;
    });
  }

  onClickRandomCriteriaWeights() {
    AudioX.playLong();

    HomePageContext.updateState(this, function (context) {
      context.criterionToWeight = GroundTruth.getRandomCriterionWeights(
        context.version
      );
    });
  }

  onClickRefreshCriteriaWeights() {
    AudioX.playLong();

    HomePageContext.updateState(this, function (context) {
      context.criterionToWeight = GroundTruth.getInitCriterionWeights(
        context.version
      );
    });
  }

  renderHeader() {
    const { context } = this.state;

    const innerPageConfig = this.getInnerPageConfig();
    const criterionToWeight = context.criterionToWeight;

    return (
      <CustomAppBar
        title={innerPageConfig.label}
        color={innerPageConfig.color}
        Icon={innerPageConfig.Icon}
        version={version}
        criterionToWeight={criterionToWeight}
        onChangeLang={this.onChangeLang.bind(this)}
        onChangeVersion={this.onChangeVersion.bind(this)}
        onClickOpenPage={this.onClickOpenPage.bind(this)}
      />
    );
  }

  renderBody() {
    const { context } = this.state;
    const innerPageConfig = this.getInnerPageConfig();
    const criterionToWeight = context.criterionToWeight;

    return (
      <Box sx={STYLE_INNER_PAGE_BOX}>
        <innerPageConfig.Page
          version={version}
          criterionToWeight={criterionToWeight}
          onClickOpenPage={this.onClickOpenPage.bind(this)}
          onChangeCriterionWeight={this.onChangeCriterionWeight.bind(this)}
          onChangeVersion={this.onChangeVersion.bind(this)}
        />
      </Box>
    );
  }

  renderFooter() {
    return (
      <HomePageBottomNavigation
        onClickOpenPage={this.onClickOpenPage.bind(this)}
        onClickRandomCriteriaWeights={this.onClickRandomCriteriaWeights.bind(
          this
        )}
        onClickRefreshCriteriaWeights={this.onClickRefreshCriteriaWeights.bind(
          this
        )}
      />
    );
  }

  render() {
    const { context } = this.state;
    const key = JSON.stringify(context);

    return (
      <Box key={key}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </Box>
    );
  }
}
