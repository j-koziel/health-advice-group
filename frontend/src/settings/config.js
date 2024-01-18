export const config = {
  backendUrl:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_BACKEND_URL
      : process.env.REACT_APP_PROD_BACKEND_URL,
  weatherApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  airQualityApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
};
