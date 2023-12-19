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
