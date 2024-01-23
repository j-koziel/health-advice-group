const timeDisplayOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

export const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], timeDisplayOptions);
};

export const getDayAsString = (timestamp) => {
  const days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
  return days[new Date(timestamp * 1000).getDay()];
};
