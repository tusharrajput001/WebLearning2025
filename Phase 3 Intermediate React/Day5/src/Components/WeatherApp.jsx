import { useState } from "react";
import {fetchWeather} from '../api/fetchWeather'
import Loader from '../Components/Loader';
import ErrorMsg from '../Components/ErrorMsg';
import WeatherCard from '../Components/WeatherCard';

function WeatherApp() { 
    const [city, setCity] = useState("");
    const [Weather, setWeather] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState("");

const handleSearch = async () => {
  if (!city) return;

  console.log("Searching for:", city); // ✅ Log input

  setLoading(true);
  setError("");
  setWeather(null);

  try {
    const data = await fetchWeather(city);
    
    console.log("Weather Data:", data); // ✅ Confirm data is returned
    setWeather(data);
  } catch (err) {
    console.error("Error fetching:", err.message);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

    


    return(
        <div>
            <h1>Weather APP ☁️</h1>
            <input type="text" value={city} placeholder="Enter city name" onChange={(e) => setCity(e.target.value)}/>
            {
console.log("Input city:", city)}
            <button onClick={handleSearch}>Search</button>

            {Loading && <Loader />}
            {Error && <ErrorMsg message={Error}/>}
            {Weather && <WeatherCard data={Weather}/>}

        </div>
    );
}


export default WeatherApp;