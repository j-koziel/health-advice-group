import { CircularProgress } from "@nextui-org/react";

export function AirQualityDash({ airQualityData }) {
  const airComponentRingsStyles = {
    svg: "w-36 h-36",
  };

  const airQualityIndexStyles = {
    svg: "w-64 h-64",
  };

  return (
    <div className="w-full h-screen text-center">
      <div className="w-full text-foreground flex flex-col items-center gap-8 md:flex-row">
        <div className="flex flex-col gap-y-4">
          <div className="flex">
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="PM2.5"
              showValueLabel
              formatOptions={{ style: "unit", unit: "kilometer" }}
            />
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="PM10"
              showValueLabel
            />
          </div>
          <div className="flex">
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="SO2"
              showValueLabel
            />
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="NH3"
              showValueLabel
            />
          </div>
        </div>
        <div>
          <CircularProgress
            value={10}
            classNames={airQualityIndexStyles}
            label="AQI"
            showValueLabel
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex">
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="CO"
              showValueLabel
            />
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="NO"
              showValueLabel
            />
          </div>
          <div className="flex">
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="NO2"
              showValueLabel
            />
            <CircularProgress
              value={10}
              classNames={airComponentRingsStyles}
              label="O3"
              showValueLabel
            />
          </div>
        </div>
      </div>
      <div className="w-full text-left">
        <p className="underline opacity-60 cursor-pointer">
          What do these numbers mean?
        </p>
      </div>
      <div>
        <p>
          The air quality in your area is{" "}
          <span className="underline">great</span>
        </p>
      </div>
    </div>
  );
}
