export default class Weight {
  static getQualitativeText(weight) {
    weight = parseInt(weight);
    const absWeight = Math.abs(weight);
    let quantityStr;
    if (absWeight > 75) {
      quantityStr = "Extremely";
    } else if (absWeight > 50) {
      quantityStr = "Quite";
    } else if (absWeight > 25) {
      quantityStr = "Somewhat";
    } else if (absWeight > 0) {
      quantityStr = "Slightly";
    } else {
      quantityStr = "Neutral";
    }

    let directionStr = "";
    if (weight > 0) {
      directionStr = " Desirable";
    } else if (weight < 0) {
      directionStr = " Undesirable";
    } else {
      directionStr = "";
    }

    return quantityStr + directionStr;
  }

  static signed(weight) {
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
