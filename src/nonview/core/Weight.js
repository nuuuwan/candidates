export default class Weight {
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
    return ""
  }

  static signed(weight) {
    weight = parseInt(weight + 0.5);
    let signPrefix = "";
    if (weight > 0) {
      signPrefix = "+";
    }
    return signPrefix + weight;
  }

  static getColor(weight) {
    if (weight === 0) {
      return "gray";
    }
    const hue = weight > 0 ? 120 : 0;
    const MIN_A = 0.33;
    const a = ((1 - MIN_A) * Math.abs(weight)) / 100 + MIN_A;
    return `hsla(${hue},100%,40%,${a})`;
  }
}
