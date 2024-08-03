import { Component, version } from "react";
import React from "react";
import { Box, Typography } from "@mui/material";

import { AudioX } from "../../nonview/base";
import { VERSION } from "../../nonview/constants";
import GroundTruth from "../../nonview/core/GroundTruth";
import { CustomAppBar, HomePageBottomNavigation } from "../../view/molecules";

import PAGE_CONFIG_LIST from "../../view/pages/PAGE_CONFIG_LIST";
import HomePageContext from "../../nonview/core/HomePageContext";
import AppColors from "../_constants/AppColors";

const STYLE_INNER_PAGE_BOX = {
  marginTop: 10,
  marginLeft: 2,
  marginRight: 2,
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
    HomePageContext.updateState(this, function (context) {
      context.page = page;
    });

    window.scrollTo(0, 0);
    AudioX.playLong();
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

  onChangeCriterionWeight(criterionID, criterionWeight) {
    HomePageContext.updateState(this, function (context) {
      context.criterionToWeight[criterionID] = criterionWeight;
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
        <Typography variant="caption" color={AppColors.MoreLight}>
          {"App Last Update at " + VERSION.DATETIME_STR}
        </Typography>
      </Box>
    );
  }

  renderFooter() {
    return (
      <HomePageBottomNavigation
        onClickOpenPage={this.onClickOpenPage.bind(this)}
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
