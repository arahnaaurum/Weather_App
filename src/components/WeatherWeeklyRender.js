import React from "react";
import "../styles/WeatherRender.css";

function WeatherWeeklyRender ({ wweather }) {
    
    function closeInfo () {
        const thedivs = document.querySelectorAll(".weekly_weather_toclose");
        thedivs.forEach((thediv)=> {thediv.classList.toggle("invisible")})
    }

    if (wweather) {
        console.log(wweather)
        let daylist = wweather.daily
        return (
            <div className="weather_info">
                { daylist.map ((day, index) => {
                    return (
                        <div className="weather_info_text weekly_weather_toclose"> {index} d from now the temperature will be:
                            <p> DAY: {day.temp.day} C</p>
                            <p> NIGHT: {day.temp.night} C</p>
                        </div>
                    )
                })}
                <button className="weather_closebtn" onClick={closeInfo}>Close / Reopen Weekly Weather</button>
        </div>       
        )
    }
    

}

export default WeatherWeeklyRender