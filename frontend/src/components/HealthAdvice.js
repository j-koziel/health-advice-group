import { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

import { getHealthAdviceData } from "../utils/get-data";

export function HealthAdvice({ weatherData }) {
  const [healthAdviceData, setHealthAdviceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAndSetHealthAdviceData = async () => {
    setHealthAdviceData(await getHealthAdviceData(weatherData));
    setIsLoading(false);
  };

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
    <div className="flex flex-col gap-y-4 md:w-1/2 p-10">
      <h1 className="text-xl md:text-5xl font-bold">Our Advice:</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <Button
          onPress={async () => {
            setIsLoading(true);
            setHealthAdviceData(null);
            await getAndSetHealthAdviceData();
          }}
          color="primary"
        >
          Generate ✨
        </Button>
      )}
      {healthAdviceData && (
        <ul className="flex flex-col gap-y-12 text-lg">
          {healthAdviceData.map((adviceString, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <strong>{extractAdviceHeading(adviceString)}:</strong>
              {extractAdviceContent(adviceString)}
            </motion.li>
          ))}
        </ul>
      )}
      <p>
        <strong className="text-danger">DISCLAIMER:</strong> This advice is
        generated using ChatGPT so it is not verified and is mainly for
        demonstration purposes
      </p>
    </div>
  );
}
