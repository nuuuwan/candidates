export default class Weight {
  static EMOJI = {
    SUITABLE: "👍🏻",
    UNSUITABLE: "👎🏻",
    NEUTRAL: "",
    SUITABLE1: "😊",
    UNSUITABLE1: "☹️",
    NEUTRAL1: "😐",
  };

  static getLabel(weight) {
    if (weight > 0) {
      return "Yes";
    }
    if (weight < 0) {
      return "No";
    }
    return "N/D";
  }

  static getMagnitudeText(weight) {
    const absWeight = Math.abs(weight);
    let magnitudeText;
    if (absWeight > 75) {
      magnitudeText = "Extremely";
    } else if (absWeight > 50) {
      magnitudeText = "Quite";
    } else if (absWeight > 25) {
      magnitudeText = "Somewhat";
    } else if (absWeight > 0) {
      magnitudeText = "Slightly";
    } else {
      magnitudeText = "Neutral";
    }
    return magnitudeText;
  }
  static getDirectionText(weight) {
    if (weight > 0) {
      return "Suitable";
    }

    if (weight < 0) {
      return "Unsuitable";
    }
    return "";
  }

  static getDirectionEmoji(weight) {
    const weightAbs = Math.abs(weight);
    let n = 1;
    if (weightAbs > 50) {
      n = 2;
    }

    let emoji = Weight.EMOJI.NEUTRAL;
    let emoji1 = Weight.EMOJI.NEUTRAL1;
    if (weight > 0) {
      emoji = Weight.EMOJI.SUITABLE;
      emoji1 = Weight.EMOJI.SUITABLE1;
    } else if (weight < 0) {
      emoji = Weight.EMOJI.UNSUITABLE;
      emoji1 = Weight.EMOJI.UNSUITABLE1;
    }

    return emoji1 + Array(n + 1).join(emoji);
  }

  static signed(weight) {
    weight = parseInt(Math.round(weight, 0));
    let signPrefix = "";
    if (weight > 0) {
      signPrefix = "+";
    }
    return signPrefix + weight;
  }

  static getColor(weight) {
    const hue = ((weight + 100) * 120) / 200;
    const absWeight = Math.abs(weight);
    const sat = absWeight;
    const light = (50 * (100 - absWeight)) / 100 + 30;
    return `hsla(${hue},${sat}%,${light}%,1)`;
  }
}
