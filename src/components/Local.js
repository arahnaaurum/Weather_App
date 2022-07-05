import React, { useState } from "react";
import "../styles/Local.css";

function Local () {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [weather, setWeather] = useState("");

    async function getWeather(lat, long) {
        if (lat&&long) {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly,daily,alerts&appid=8fce7e4d96a4a5a6f7f597c1fff64f4e`)
            let result = await response.json();
            setWeather(result);
        }
    }
    
    if (!weather) {
        navigator.geolocation.getCurrentPosition((position)=> {
            setLat(position.coords.latitude);
            setLong (position.coords.longitude);
            getWeather(lat, long);
        }, error => {
            console.log(error);
        })    
    }
    
    if (weather) {
        let temp1 = weather.current.temp;
        let temp2 = weather.current.feels_like;
        return (
                <div className="local_container">
                    <h2 className="greeting">Greetings, guest!</h2>
                    <p className="forecast">Wherever you are, there should be { weather.current.weather[0].description }</p>
                    <p className="forecast">The temperature is { temp1.toFixed(2) } С and it feels like { temp2.toFixed(2) } С</p>
                    {temp1 > 15 ? <svg width="100" height="100"><path fill="#FFCA28" d="M88.788 48.135 78.2 41.4c-1.615-1.025-2.595-3.393-2.183-5.262l2.73-12.246c.414-1.867-.773-3.057-2.643-2.643l-12.245 2.73c-1.867.414-4.234-.567-5.261-2.182l-6.734-10.588c-1.025-1.615-2.705-1.615-3.73 0l-6.736 10.588c-1.024 1.615-3.392 2.596-5.26 2.182l-12.244-2.73c-1.869-.414-3.058.775-2.645 2.643l2.73 12.246c.414 1.869-.565 4.234-2.181 5.262l-10.589 6.734c-1.614 1.025-1.614 2.705 0 3.73l10.59 6.734c1.615 1.025 2.594 3.393 2.183 5.262l-2.733 12.246c-.413 1.867.773 3.057 2.645 2.643l12.246-2.731c1.867-.414 4.233.567 5.26 2.18l6.734 10.59c1.025 1.616 2.705 1.616 3.73 0L58.6 78.197c1.026-1.616 3.394-2.596 5.261-2.179l12.245 2.727c1.869.419 3.057-.769 2.642-2.638l-2.729-12.246c-.417-1.869.563-4.236 2.177-5.262l10.594-6.734c1.612-1.025 1.612-2.705-.002-3.73zm-14.169 4.84c-3.987 2.533-6.137 7.723-5.107 12.338l1.204 5.404-5.405-1.206a10.85 10.85 0 0 0-2.352-.253c-3.997 0-7.917 2.104-9.986 5.365L50 79.3l-2.977-4.677c-2.065-3.261-5.988-5.365-9.985-5.365-.798 0-1.582.084-2.337.25l-5.416 1.209 1.204-5.404c1.021-4.625-1.131-9.809-5.115-12.34L20.701 50l4.678-2.975c3.979-2.529 6.132-7.713 5.112-12.324l-1.206-5.418 5.403 1.206c.768.169 1.552.253 2.35.253 3.997 0 7.92-2.105 9.989-5.367L50 20.7l2.977 4.678c2.064 3.26 5.987 5.365 9.984 5.365.798 0 1.582-.084 2.338-.25l5.416-1.207-1.204 5.404c-1.021 4.625 1.131 9.807 5.114 12.339L79.3 50l-4.681 2.975z"/><path fill="#FFCA28" d="M50 33.333c-9.206 0-16.667 7.46-16.667 16.667 0 9.205 7.461 16.666 16.667 16.666S66.667 59.205 66.667 50c0-9.207-7.461-16.667-16.667-16.667zM50 60c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.524 0 10 4.477 10 10s-4.476 10-10 10z"/></svg>:
                    <svg width="100" height="100"><path fill="#29B6F6" d="m89.999 36.902-4.714-4.713-14.477 14.479h-7.946a13.09 13.09 0 0 0-1.413-3.401l19.193-19.192-4.714-4.714-19.194 19.192a13.145 13.145 0 0 0-3.402-1.413v-7.945l14.479-14.479-4.711-4.714-9.768 9.765v-9.765h-6.666v9.765l-9.765-9.765-4.713 4.713 14.479 14.479v7.943a13.206 13.206 0 0 0-3.4 1.415L24.073 19.359l-4.714 4.714L38.55 43.264a13.236 13.236 0 0 0-1.413 3.403h-7.943l-14.48-14.479-4.713 4.713 9.767 9.766h-9.767v6.664h9.767l-9.767 9.766 4.713 4.715 14.479-14.479h7.942a13.202 13.202 0 0 0 1.414 3.401l-19.19 19.192 4.714 4.713 19.192-19.191a13.054 13.054 0 0 0 3.4 1.412v7.945l-14.477 14.48L36.901 90l9.766-9.766V90h6.667v-9.766L63.1 90l4.712-4.715-14.48-14.478v-7.945a13.268 13.268 0 0 0 3.402-1.412l19.191 19.191 4.714-4.713-19.191-19.193a13.14 13.14 0 0 0 1.413-3.403h7.944l14.479 14.48 4.714-4.715-9.766-9.766h9.766v-6.664h-9.766l9.767-9.765zM50 56.667a6.664 6.664 0 0 1-6.667-6.666A6.663 6.663 0 0 1 50 43.334a6.665 6.665 0 0 1 6.667 6.667A6.666 6.666 0 0 1 50 56.667zM14.647 19.36 10 14.715l4.712-4.713 4.646 4.644zM80.637 14.65 85.285 10l4.713 4.713-4.648 4.649zM80.644 85.354 85.285 90l4.714-4.715-4.646-4.64zM19.362 85.352 14.714 90l-4.712-4.712 4.648-4.648z"/></svg>}
                </div>
            )
    } else {
        return (
                <div className="local_container">
                <h2 className="greeting">Greetings, guest!</h2>
                <p className="forecast"> Please enable geolocation on your browser to see the local weather</p>
                <p className="forecast">You may also check weather in any of the cities below</p>
                </div>
            )
    }
}


export default Local