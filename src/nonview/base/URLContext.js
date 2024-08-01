export default class URLContext {
  static contextToURL(context) {
    const origin = window.location.origin;
    let urlBase = origin + process.env.PUBLIC_URL;
    if (!context) {
      return urlBase;
    }
    return (
      urlBase +
      "?" +
      Object.entries(context)
        .map(function ([k, v]) {
          return k + "=" + v;
        })
        .join("&")
    );
  }

  static urlToContext(url) {
    const urlTokens = url.split("?");
    if (urlTokens.length !== 2) {
      return {};
    }
    const contextStr = urlTokens[1];
    return Object.fromEntries(
      contextStr.split("&").map(function (x) {
        const [k, v] = x.split("=");
        return [k, v];
      })
    );
  }

  static getURL() {
    return window.location.href;
  }
  static setURL(url) {
    window.history.pushState("", "", url);
  }

  static setContext(context) {
    const url = URLContext.contextToURL(context);
    URLContext.setURL(url);
  }

  static getContext() {
    const url = URLContext.getURL();
    return URLContext.urlToContext(url);
  }
}
