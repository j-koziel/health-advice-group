import { useState } from "react"
import {motion} from "framer-motion"

import { getOpenWeatherMapData } from "../utils/get-data"
import { config } from "../settings/config"

export function LocationSearch({ setSelectedLocation, setPageState }) {
    const [locationData, setLocationData] = useState(null)
    const [locationQuery, setLocationQuery] = useState("")

    return <div className="h-full bg-background text-foreground flex flex-col gap-y-6">
        <form className="flex gap-x-2" onSubmit={async (e) => {
            e.preventDefault()
            setLocationQuery("")
            const data = await getOpenWeatherMapData(`https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${config.weatherApiKey}`)

            setLocationData([...data])
        }}>
            <input className="border-none outline-none bg-background" type="text" placeholder="Search for a location..." value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} autoFocus/>
            <input className="border-solid border-foreground border-2 border-opacity-50 rounded-md p-2 transition-all hover:text-primary hover:border-primary hover:border-opacity-100" type="submit" value="Search" />
        </form>
        <motion.div className="flex flex-col" initial={{opacity: 0}} animate={{opacity: 1}}>
            {locationData && locationData.map((location, i) => {
                return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {ease: "easeIn", delay: (i + 1) / 8}}} key={i} onClick={() => { setSelectedLocation(location); setPageState("weather"); }}>{location.name}, {location.country}</motion.div>
            }) }
        </motion.div>

    </div>
}