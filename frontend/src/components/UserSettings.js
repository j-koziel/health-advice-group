import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import axios from "axios";

import { Input } from "./Input";
import { useWeatherUnits } from "../context/UnitsContext";
import { config } from "../settings/config";
import { useAuth } from "../context/AuthContext";

export function UserSettings({ userData }) {
  const { preferredUnits, setPreferredUnits } = useWeatherUnits();
  const [metricIsSelected, setMetricIsSelected] = useState(
    preferredUnits === "metric" || null ? true : false
  );
  const [imperialIsSelected, setImperialIsSelected] = useState(
    preferredUnits === "imperial" ? true : false
  );
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const { accessToken } = useAuth();

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
        <form
          className="md:w-1/2 flex flex-col gap-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            await axios.put(
              `${config.backendUrl}/api/v1/users/me`,
              { name: newName, email: newEmail },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
          }}
        >
          <Input
            type="text"
            placeholder={userData.name}
            labelText="Name"
            id="settings-name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex flex-col gap-2"
          />
          <Input
            type="email"
            placeholder={userData.email}
            labelText="Email"
            id="settings-email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
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
