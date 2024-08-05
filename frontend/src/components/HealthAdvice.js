import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

import { getHealthAdviceData } from "../utils/get-data";

export function HealthAdvice({ weatherData }) {
  const [healthAdviceData, setHealthAdviceData] = useState(null);

  useEffect(() => {
    const getAndSetHealthAdviceData = async () => {
      setHealthAdviceData(await getHealthAdviceData(weatherData));
    };

    getAndSetHealthAdviceData();
  }, [weatherData]);

  const extractAdviceHeading = (adviceString) => {
    const firstOccurrenceIndex = adviceString.indexOf("**");
    const secondOccurrenceIndex = adviceString.indexOf(
      "**",
      firstOccurrenceIndex + 1
    );

    return adviceString
      .slice(firstOccurrenceIndex, secondOccurrenceIndex)
      .replace("**", "");
  };

  const extractAdviceContent = (adviceString) => {
    const firstOccurrenceIndex = adviceString.indexOf("**");
    const secondOccurrenceIndex = adviceString.indexOf(
      "**",
      firstOccurrenceIndex + 1
    );

    return adviceString.slice(secondOccurrenceIndex).replace("**:", "");
  };

  return (
    <div className="flex flex-col items-center gap-y-4 w-1/2">
      <h1 className="text-xl md:text-5xl font-bold">Our Advice:</h1>
      {healthAdviceData ? (
        <ul className="flex flex-col items-center gap-y-12 text-lg">
          {healthAdviceData.map((adviceString, i) => (
            <li key={i}>
              <strong>{extractAdviceHeading(adviceString)}:</strong>
              {extractAdviceContent(adviceString)}
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      <p>
        <strong className="text-danger">DISCLAIMER:</strong> This advice is
        generated using ChatGPT so it is not verified and is mainly for
        demonstration purposes
      </p>
    </div>
  );
}
