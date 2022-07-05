import React from "react";
import "../styles/WeatherRender.css";

function WeatherRender ({ weather }) {
    function closeInfo () {
        const thediv = document.querySelector(".weather_toclose");
        thediv.classList.toggle("invisible")
    }

    if (weather) {
        console.log(weather)
        let curT = (weather.current.temp).toFixed(2)
        let feelT = (weather.current.feels_like).toFixed(2)
        let desc = weather.current.weather[0].description
        return (
            <div className="weather_info">
                <div className="weather_info_text weather_toclose">
                    <p> { desc.toUpperCase() } </p>
                    <p> t { curT } C </p>
                    <p> feels like { feelT } C</p>
                </div>
                <button className="weather_closebtn" onClick={closeInfo}>Close / Reopen Current Weather</button>
            </div>
        )
    }
    

}

export default WeatherRender