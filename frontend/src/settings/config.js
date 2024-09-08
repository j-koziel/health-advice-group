export const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  weatherApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  airQualityApiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
  weatherApiUrl: `https://api.openweathermap.org/data/2.5/weather?&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  weatherForecastApiUrl: `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  airQualityApiUrl: `https://api.openweathermap.org/data/2.5/air_pollution?&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
};
