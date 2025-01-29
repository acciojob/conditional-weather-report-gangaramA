
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Setting the required weather data
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );

}

export default App
