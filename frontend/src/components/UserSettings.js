import { useState } from "react";
import { Checkbox } from "@nextui-org/react";

import { Input } from "./Input";
import { useWeatherUnits } from "../context/UnitsContext";

export function UserSettings({ userData }) {
  const { preferredUnits, setPreferredUnits } = useWeatherUnits();
  const [metricIsSelected, setMetricIsSelected] = useState(
    preferredUnits === "metric" || null ? true : false
  );
  const [imperialIsSelected, setImperialIsSelected] = useState(
    preferredUnits === "imperial" ? true : false
  );

  const handleUnitChange = (
    isSelected,
    setUserSelection,
    setOpposite,
    units
  ) => {
    setUserSelection(isSelected);
    setOpposite(!isSelected);
    localStorage.setItem("preferredUnits", units);
    setPreferredUnits(units);
  };

  return (
    <div className="w-[200px] md:w-[600px]">
      <h1 className="font-bold text-2xl md:text-4xl">Settings</h1>
      <div className="w-full flex flex-col items-center md:flex-row md:items-start">
        <form className="md:w-1/2 flex flex-col gap-y-4">
          <Input
            type="text"
            placeholder={userData.name}
            labelText="Name"
            id="settings-name"
            className="flex flex-col gap-2"
          />
          <Input
            type="email"
            placeholder={userData.email}
            labelText="Email"
            id="settings-email"
            className="flex flex-col gap-2"
          />
          <input
            type="submit"
            value="Save"
            className="bg-background border-solid border-foreground border-2 p-2 rounded-md cursor-pointer transition-shadow hover:shadow-xl focus:shadow-2xl placeholder:text-foreground placeholder:opacity-60"
          />
        </form>

        <div className="w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold">Preferred Units</h2>
          <div className="w-full flex justify-center gap-x-2">
            <Checkbox
              isSelected={!imperialIsSelected}
              onValueChange={(isSelected) => {
                handleUnitChange(
                  isSelected,
                  setMetricIsSelected,
                  setImperialIsSelected,
                  "metric"
                );
              }}
              color="primary"
            >
              Metric
            </Checkbox>
            <Checkbox
              isSelected={!metricIsSelected}
              onValueChange={(isSelected) => {
                handleUnitChange(
                  isSelected,
                  setImperialIsSelected,
                  setMetricIsSelected,
                  "imperial"
                );
              }}
              color="primary"
            >
              Imperial
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}
