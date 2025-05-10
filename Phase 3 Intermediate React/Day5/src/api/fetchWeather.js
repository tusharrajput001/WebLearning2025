const API_KEY = "b84966806ada8fb563ede2cd1252f600";
export async function fetchWeather(city) {
  const response = await fetch(
    `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
  );
  console.log("Fetching from URL:", `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}
