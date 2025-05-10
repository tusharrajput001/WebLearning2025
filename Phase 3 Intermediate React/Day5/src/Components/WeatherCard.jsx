export default function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, borderRadius: 8 }}>
      <h2>📍 {location.name}, {location.country}</h2>
      <p>🌡️ Temperature: {current.temperature}°C</p>
      <p>🌥️ Description: {current.weather_descriptions?.[0]}</p>
      {current.weather_icons?.[0] && (
        <img src={current.weather_icons[0]} alt="weather icon" width={64} />
      )}
      <p>💨 Wind: {current.wind_speed} km/h ({current.wind_dir})</p>
      <p>💧 Humidity: {current.humidity}%</p>
      <p>☁️ Cloud Cover: {current.cloudcover}%</p>
    </div>
  );
}
