export const config = {
  backendUrl:
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_BACKEND_URL
      : process.env.REACT_APP_DEV_BACKEND_URL,
  weatherApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  airQualityApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  weatherApiUrl: `https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  weatherForecastApiUrl: `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
};
