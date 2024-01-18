export function formatTempUnits(units) {
  return units === "metric" ? "°C" : "°F";
}

export function formatDistanceUnits(units) {
  return units === "metric" ? "m/s" : "mph";
}
