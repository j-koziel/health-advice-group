import { createContext, useContext, useState } from "react";

export const FavLocationsContext = createContext();

export const useFavLocations = () => useContext(FavLocationsContext);

export const FavLocationsProvider = ({ children }) => {
  const [favLocations, setFavLocations] = useState(
    JSON.parse(localStorage.getItem("favLocations")) || []
  );

  return (
    <FavLocationsContext.Provider value={{ favLocations, setFavLocations }}>
      {children}
    </FavLocationsContext.Provider>
  );
};
