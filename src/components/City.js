import React, { useState } from "react";
import "../styles/City.css";
import WeatherRender from "./WeatherRender";
import WeatherDailyRender from "./WeatherDailyRender";
import WeatherWeeklyRender from "./WeatherWeeklyRender";

function City ( { city } ) {
    
    const [currentWeather, setCurrentWeather] = useState("");
    const [dailyWeather, setDailyWeather] = useState("");
    const [weeklyWeather, setWeeklyWeather] = useState("");

    async function getCurrentWeather () {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=minutely,hourly,daily,alerts&appid=8fce7e4d96a4a5a6f7f597c1fff64f4e`)
        let result = await response.json();
        setCurrentWeather(result);
        console.log(currentWeather)
    }

    async function getDailyWeather () {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=currently,minutely,daily,alerts&appid=8fce7e4d96a4a5a6f7f597c1fff64f4e`)
        let result = await response.json();
        setDailyWeather(result);
        console.log(dailyWeather)
    }
    
    async function getWeeklyWeather () {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&units=metric&exclude=currently,minutely,hourly,alerts&appid=8fce7e4d96a4a5a6f7f597c1fff64f4e`)
        let result = await response.json();
        setWeeklyWeather(result);
        console.log(weeklyWeather)
    }

    if (currentWeather) {
        let currentTemp = currentWeather.current.temp
        let feelsLike = currentWeather.current.feels_like
        console.log (currentTemp)
    }

    return (
        <>
            <div className="city_item">
                    <div className="city_item_text">{ city.country }, { city.name }</div>
                    <div>
                        <button className="checkbtn" onClick={getCurrentWeather}> This Hour </button>
                        <button className="checkbtn" onClick={getDailyWeather}> This Day / Next Day </button>
                        <button className="checkbtn" onClick={getWeeklyWeather}> This Week </button>
                    </div>
            </div>
            
            <WeatherRender weather={currentWeather}/>
            <WeatherDailyRender dweather={dailyWeather}/>
            <WeatherWeeklyRender wweather={weeklyWeather}/>
        </>
    )
}

export default City;
