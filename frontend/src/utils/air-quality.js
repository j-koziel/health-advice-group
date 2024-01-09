export const airQualityDescription = (aqi) => {
  if (!aqi) {
    return "error";
  }

  const descriptions = ["good", "fair", "moderate", "poor", "very poor"];
  return descriptions[aqi - 1];
};

export const airQualityColour = (val, minVal, midVal, maxVal) => {
  if (val >= minVal && val < midVal) return "primary";
  if (val >= midVal && val < maxVal) return "warning";
  if (val >= maxVal) return "danger";
};
