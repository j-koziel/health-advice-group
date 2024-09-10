export const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  weatherApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  airQualityApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  weatherApiUrl: `${process.env.REACT_APP_BACKEND_URL}/api/v1/weather`,
  airQualityApiUrl: `${process.env.REACT_APP_BACKEND_URL}/api/v1/air-quality`,
  reverseGeoLocationApiUrl: `${process.env.REACT_APP_BACKEND_URL}/api/v1/reverse-geo-location`,
};
