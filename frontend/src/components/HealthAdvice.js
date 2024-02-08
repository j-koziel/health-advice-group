import { useEffect, useState } from "react";

import { useWeatherUnits } from "../context/UnitsContext";
import { getHealthAdviceData } from "../utils/get-data";

export function HealthAdvice({ temp, uvIndex }) {
  const [healthAdviceData, setHealthAdviceData] = useState(null);

  const { preferredUnits } = useWeatherUnits();

  useEffect(() => {
    const getAndSetHealthAdviceData = async () => {
      setHealthAdviceData({
        ...(await getHealthAdviceData(temp, uvIndex, preferredUnits)),
      });
    };

    getAndSetHealthAdviceData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-4 md:items-start">
      <h1 className="text-xl md:text-5xl font-bold">Our Advice:</h1>
      {healthAdviceData && (
        <ul className="flex flex-col items-center gap-y-12 text-lg md:text-4xl md:items-start">
          <li>{healthAdviceData.uv_advice}</li>
          <li>{healthAdviceData.temp_advice}</li>
          <li>{healthAdviceData.health_risks[0]}</li>
        </ul>
      )}
    </div>
  );
}
