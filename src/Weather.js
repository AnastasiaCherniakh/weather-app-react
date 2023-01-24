import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Vienna",
    temperature: 7,
    date: "10 January 17:21",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    wind: 9,
    feelsLike: 2
  };
  return (
    <section className="Weather">
      <h1 className="city">{weatherData.city}</h1>
      <div className="flex-container">
        <p className="main-day-info">{weatherData.date}</p>
      </div>
      <p className="description">{weatherData.description}</p>

      <div className="main-temperature-wrap">
        <img src={weatherData.imgUrl} alt="" />
        <h2 className="main-temperature">{weatherData.temperature}</h2>
        <p className="temp-C">°C</p>
        <div className="row additional-info">
          <p className="wind-info">Wind: {weatherData.wind} km/h</p>
          <p className="temp-feel">Fells like: {weatherData.feelsLike} °C</p>
        </div>
      </div>
    </section>
  );
}