import React from "react";
import "../stylesheets/Card.css";

class Card extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      "http://api.weatherstack.com/current?access_key=38dc0a08ba364082a8994237ba2f5d65&query=Tokyo"
    );
    const data = await response.json();
    let currentTemp = JSON.stringify(data.current.temperature);
    let precip = JSON.stringify(data.current.precip);
    let humidity = JSON.stringify(data.current.humidity);
    let uvIndex = JSON.stringify(data.current.uv_index);
    let icon = JSON.stringify(data.current.weather_icons[0]);
    let iconStr = icon.substring(1, icon.length - 1);
    this.setState({
      weather: data,
      currentTemp: currentTemp,
      precip: precip,
      humidity: humidity,
      uvIndex: uvIndex,
      iconStr: iconStr,
    });
    // console.log(this.state);
  }

  render() {
    const weather = this.state?.weather;
    if (weather === undefined) {
      return <p>Weather is loading please wait..</p>;
    } else {
      console.log(weather);
      return (
        <div className="card">
          <div className="JapanInfo">
            <h1>Come to the land of the rising sun!</h1>
            <p>
              Enjoy sake with the locals. Visit the shrines hidden away in lush
              landscapes
            </p>
            <br></br>
            <p>
              Japan is an island country in East Asia located in the northwest
              Pacific Ocean. It borders the Sea of Japan to the west, and it
              extends from the Sea of Okhotsk in the north to the East China Sea
              and Taiwan in the south
            </p>
            <br></br>
            <p>
              Japan Airlines is the national carrier and offers daily cheap
              flights to Tokyo and Osaka from Sydney. Other airlines that
              operate flights to Japan are: China Southern, Air Asia, Qantas,
              Thai Airways and Jetstar.
            </p>
          </div>
          <div className="weather-Container">
            <h3>Current Weather in Tokyo:</h3>
            <>
              <img
                className="weather-icon"
                src={this.state.iconStr}
                alt="weather icon"
              />
            </>
            <p> Current Temperature: {this.state.currentTemp}</p>
            <p> | Precipitation: {this.state.precip}</p>
            <p> | Humidity: {this.state.humidity}</p>
            <p> | UV Index: {this.state.uvIndex}</p>
            <br></br>
            <br></br>
          </div>
        </div>
      );
    }
  }
}
export default Card;
