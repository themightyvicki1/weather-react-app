import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  // create const to store city, setCity function, and set to ""
  const [city, setCity] = useState("");
  // create a new state, know if we have results
  const [loaded, setLoaded] = useState(false);
  //new state for temperature. no temp to start
  // change to weather object to store more info
  const [weather, setWeather] = useState([]);

  // how to keep form showing, create variable to store it in
  /* add a submit listener, on submit go to this function */
  let form = (
    <form onSubmit={handleSubmit}>
      {/*whenever this search input changes, update the city (function call)*/}
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
        className="search-bar"
      />

      <input type="submit" value="Search" className="button" />
    </form>
  );

  // function rec response from api
  // update the weather, show the weather
  function displayWeather(response) {
    setLoaded(true);
    // set weather. in array
    // setting the weather to an object
    // updating the state of the weather so we can display the component
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  /*sending event here from the onSubmit listener on form */
  function handleSubmit(event) {
    /*prevent default behavior so page does not reload */
    event.preventDefault();
    let apiKey = `1a2b7258ebd456c01aef9175dfe8b709`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    // api call whenever the form is being submitted and send API apiUrl
    axios.get(apiUrl).then(displayWeather);
  }

  // rec an event, b/c event is happening with onChange
  function updateCity(event) {
    //update the city variable with setCity function, everytime we change
    // have access to the city (useState)
    setCity(event.target.value);
  }

  // now display the form variable
  if (loaded) {
    return (
      <div className="Weather">
        {/*this will keep the form, (search bar and button) on screen when updating, and show the city name */}
        {form}
        <div className="city-name">{city}</div>
        <ul className="updated-info">
          <li>
            temperature:{" "}
            <span className="data">
              {Math.round(weather.temperature)}°<small>F</small>
            </span>
          </li>
          <li>
            description: <span className="data">{weather.description}</span>
          </li>
          <li>
            humidity: <span className="data">{weather.humidity}%</span>
          </li>
          <li>
            Wind speed:{" "}
            <span className="data">{Math.round(weather.wind)} mph</span>
          </li>
          <li>
            {" "}
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
        <img src={weather.icon} alt="weather icon" />
        <img src={weather.icon} alt="weather icon" />
        <img src={weather.icon} alt="weather icon" />
        <img src={weather.icon} alt="weather icon" />
        <img src={weather.icon} alt="weather icon" />
        <div>
          <button className="button">Current Location</button>
        </div>
      </div>
    );
    // else return form b/c it is not loaded
  } else {
    /*render a search engine using a form */
    /*need to make an API call to search temp of a city */
    return form;
  }
}
