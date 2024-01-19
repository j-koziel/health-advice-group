import { useState } from "react"

import { LocationSearch } from "../components/LocationSearch"

export function WeatherForecast() {
    const [pageState, setPageState] = useState("location")
    const [selectedLocation, setSelectedLocation] = useState(null)

    return <div className="w-full h-screen flex items-center justify-center bg-background">
        {pageState === "location" ? <LocationSearch setPageState={setPageState} setSelectedLocation={setSelectedLocation}/> : <div>These are the weather forecasts</div>}
    </div>
}