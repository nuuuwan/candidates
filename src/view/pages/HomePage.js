import { Component } from "react";

import Box from "@mui/material/Box";

import AudioX from "../../nonview/base/AudioX";
import I18N  from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";

import PAGE_CONFIG_LIST, {
  DEFAULT_PAGE_CONFIG,
} from "../../view/pages/PAGE_CONFIG_LIST";

const STYLE_INNER_PAGE_BOX = {
  marginTop: 10,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    this.state = {
      context,
    };
    this.isComponentMounted = false;
    this.setContext(context);
  }

  getContext() {
    let context = URLContext.getContext();
    if (!context.page) {
      context.page = "issuesPage";
    }
    return context;
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  setContext(newContext) {
    const oldContext = this.getContext();
    const context = { ...oldContext, ...newContext };

    URLContext.setContext(context);
    I18N.setLang(context.lang);

    if (this.isComponentMounted) {
      this.setState({ context });
    }
  }

  onClickOpenPage(page) {
    AudioX.playShort();
    let context = URLContext.getContext();
    context.page = page;
    this.setContext(context);
  }

  getInnerPageConfig() {
    let { context } = this.state;

    for (let config of PAGE_CONFIG_LIST) {
      if (config.page === context.page) {
        context.page = config.page;
        URLContext.setContext(context);
        return config;
      }
    }

    context.page = DEFAULT_PAGE_CONFIG.page;
    URLContext.setContext(context);
    return DEFAULT_PAGE_CONFIG;
  }

  render() {
    const { context } = this.state;
    const key = JSON.stringify(context);
    const innerPageConfig = this.getInnerPageConfig();

    return (
      <Box key={key}>
        <CustomAppBar
          title={innerPageConfig.label}
          Icon={innerPageConfig.Icon}
        />
        <Box sx={STYLE_INNER_PAGE_BOX}>
          <innerPageConfig.Page
            onClickOpenPage={this.onClickOpenPage.bind(this)}
          />
        </Box>
        <HomePageBottomNavigation
          onClickOpenPage={this.onClickOpenPage.bind(this)}
        />
      </Box>
    );
  }
}
