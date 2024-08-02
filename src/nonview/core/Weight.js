export default class Weight {
  static EMOJI = {
    SUITABLE: "👍🏻",
    UNSUITABLE: "👎🏻",
    NEUTRAL: "",
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
    let emoji = Weight.EMOJI.NEUTRAL;

    if (weight > 0) {
      emoji = Weight.EMOJI.SUITABLE;
    } else if (weight < 0) {
      emoji = Weight.EMOJI.UNSUITABLE;
    }

    return emoji;
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
