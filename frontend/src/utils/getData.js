import axios from "axios";

function getData(url) {
  // This will decide whether we call
  const resourceToAccess = url.includes("onecall") ? "weather" : "aq";

  const data =
    resourceToAccess === "weather"
      ? getWeatherData(url)
      : getAirQualityData(url);

  return data;
}

function getWeatherData(url) {
  return null;
}

function getAirQualityData(url) {
  return;
}

export function parseExcludeParams(onecallUrl) {
  const params = new URL(onecallUrl).searchParams;

  if (!params.has("exclude")) {
    return;
  }

  const excludeItems = params.get("exclude").split(",");
  console.log(excludeItems);

  // return params.keys();
}
