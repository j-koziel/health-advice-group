import { CircularProgress } from "@nextui-org/react";
import { AirQualityInfoModal } from "./AirQualityInfoModal";
import { useDisclosure } from "@nextui-org/react";
export function AirQualityDash({ airQualityData }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const airComponentRingsStyles = {
    svg: "w-36 h-36 rotate-[180deg]",
    value: "text-3xl",
    label: "text-xl",
    track: "stroke-accent dark:opacity-60",
    indicator: "stroke-textColor",
  };

  const airQualityIndexStyles = {
    svg: "w-64 h-64 rotate-[180deg]",
    value: "text-6xl",
    label: "text-2xl",
    track: "stroke-accent dark:opacity-60",
    indicator: "stroke-textColor",
  };

  const airQualityDescription = (aqi) => {
    if (!aqi) {
      return "error";
    }

    const descriptions = ["good", "fair", "moderate", "poor", "very poor"];
    return descriptions[aqi - 1];
  };

  const airQualityColour = (val, minVal, midVal, maxVal) => {
    if (val >= minVal && val < midVal) return "primary";
    if (val >= midVal && val < maxVal) return "warning";
    if (val >= maxVal) return "danger";
  };

  return (
    <div className="w-full h-full text-center">
      <div className="w-full text-foreground flex flex-col items-center gap-8 md:flex-row">
        <div className="flex flex-col gap-y-4">
          <div className="flex">
            <CircularProgress
              value={airQualityData.components.pm2_5}
              maxValue={75}
              classNames={airComponentRingsStyles}
              label="PM₂.₅"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.pm2_5,
                0,
                50,
                75
              )}
              formatOptions={{}}
            />
            <CircularProgress
              value={airQualityData.components.pm10}
              maxValue={200}
              classNames={airComponentRingsStyles}
              label="PM₁₀"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.pm10,
                0,
                50,
                200
              )}
              formatOptions={{}}
            />
          </div>
          <div className="flex">
            <CircularProgress
              value={airQualityData.components.so2}
              maxValue={350}
              classNames={airComponentRingsStyles}
              label="SO₂"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.so2,
                0,
                250,
                350
              )}
              formatOptions={{}}
            />
            <CircularProgress
              value={airQualityData.components.nh3}
              minValue={0.1}
              maxValue={200}
              classNames={airComponentRingsStyles}
              label="NH₃"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.nh3,
                0.1,
                100,
                200
              )}
              formatOptions={{}}
            />
          </div>
        </div>
        <div>
          <CircularProgress
            value={airQualityData.main.aqi}
            minValue={0}
            maxValue={5}
            classNames={airQualityIndexStyles}
            label="AQI"
            showValueLabel
            color={airQualityColour(airQualityData.main.aqi, 1, 3, 5)}
            formatOptions={{}}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex">
            <CircularProgress
              value={airQualityData.components.co}
              minValue={0}
              maxValue={15400}
              classNames={airComponentRingsStyles}
              label="CO"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.co,
                0,
                12400,
                15400
              )}
              formatOptions={{}}
            />
            <CircularProgress
              value={airQualityData.components.no}
              minValue={0.1}
              maxValue={100}
              classNames={airComponentRingsStyles}
              label="NO"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.no,
                0.1,
                50,
                100
              )}
              formatOptions={{}}
            />
          </div>
          <div className="flex">
            <CircularProgress
              value={airQualityData.components.no2}
              minValue={0}
              maxValue={200}
              classNames={airComponentRingsStyles}
              label="NO₂"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.no2,
                0,
                150,
                200
              )}
              formatOptions={{}}
            />
            <CircularProgress
              value={airQualityData.components.o3}
              minValue={0}
              maxValue={180}
              classNames={airComponentRingsStyles}
              label="O₃"
              showValueLabel
              color={airQualityColour(
                airQualityData.components.o3,
                0,
                140,
                180
              )}
              formatOptions={{}}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-left w-fit">
        <p className="underline opacity-60 cursor-pointer" onClick={onOpen}>
          What do these numbers mean?
        </p>
      </div>
      <div className="mt-4">
        <p className="text-2xl">
          The air quality in your area is{" "}
          <span className="underline">
            {airQualityDescription(airQualityData.main.aqi)}
          </span>
        </p>
      </div>
      <AirQualityInfoModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
