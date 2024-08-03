import { t } from "../../nonview/base/I18N";

export default class TimeX {
  static HOURS_IN = {
    DAY: 24,
    YEAR: 24 * 365.25,
  };

  static SECONDS_IN = {
    MINUTE: 60,
    HOUR: 3_600,
    DAY: 86_400,
    WEEK: 86_400 * 7,
  };

  static MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  static DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  static getUnixTime() {
    return parseInt(new Date() / 1_000.0);
  }

  static parseTime(timeStr) {
    return new Date(timeStr) / 1_000.0;
  }

  static formatTime(ut) {
    if (ut < TimeX.SECONDS_IN.DAY) {
      return "";
    }

    const date = new Date(ut * 1_000.0);
    return (
      t(TimeX.DAYS[date.getDay()]) +
      ", " +
      t(TimeX.MONTHS[date.getMonth()]) +
      " " +
      date.getDate() +
      ", " +
      t("at 000", date.getHours() + ":" + date.getMinutes())
    );
  }

  static formatDeltaTime(delta) {
    for (let [duration, label] of [
      [TimeX.SECONDS_IN.WEEK, "week"],
      [TimeX.SECONDS_IN.DAY, "day"],
      [TimeX.SECONDS_IN.HOUR, "hour"],
      [TimeX.SECONDS_IN.MINUTE, "minute"],
      [1, "second"],
    ]) {
      if (delta > duration) {
        const x = parseInt(delta / duration);
        const pluralStr = x === 1 ? "" : "s";
        return [x, `${label}${pluralStr}`];
      }
    }
    return [0, "seconds"];
  }

  static getHumanTime(ut) {
    const delta = ut - TimeX.getUnixTime();
    const absDelta = Math.abs(delta);
    const [x, labelStr] = TimeX.formatDeltaTime(absDelta);
    if (delta > 0) {
      return t("In 000 " + labelStr, x);
    } else {
      return t("000 " + labelStr + " ago", x);
    }
  }
}
