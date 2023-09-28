// src/api.js
const API_KEY = "d4d2cc205e5078543c0977b151274eae";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
