export function windDirection(deg) {
  console.log(deg);
  switch (deg) {
    case deg === 0:
      return "North";
    case deg > 0 || deg < 90:
      return "North East";
    case deg === 90:
      return "East";
    case deg > 90 || deg < 180:
      return "South West";
    case deg === 180:
      return "South";
    case deg > 180 || deg < 270:
      return "South West";
    case deg === 270:
      return "West";
    case deg > 270 || deg < 360:
      return "North West";
    default:
      return "Invalid wind direction";
  }
}
