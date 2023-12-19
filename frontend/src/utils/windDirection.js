export function windDirection(deg) {
  if (deg === 0) {
    return "North";
  } else if (deg > 0 && deg < 90) {
    return "North East";
  } else if (deg === 90) {
    return "East";
  } else if (deg > 90 && deg < 180) {
    return "South West";
  } else if (deg === 180) {
    return "South";
  } else if (deg > 180 && deg < 270) {
    return "South West";
  } else if (deg === 270) {
    return "West";
  } else if (deg > 270 && deg < 360) {
    return "North West";
  } else {
    return "Invalid wind direction";
  }
}
