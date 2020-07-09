import React from "react";
// import "./stylesheets/Card.css";

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
    this.setState({ weather: data, currentTemp: currentTemp, precip: precip, humidity: humidity, uvIndex: uvIndex });
    // console.log(this.state);
  };

  render() {
    const weather = this.state?.weather;
    if (weather === undefined) {
      return <p>Weather is loading please wait..</p>
    } else {
      console.log(weather);
      return (
        <div>
          <h3>Current Weather in Tokyo:</h3>
          <p>Current Temperature: {this.state.currentTemp}</p>
          <p>Precipitation: {this.state.precip}</p>
          <p>Humidity: {this.state.humidity}</p>
          <p>UV Index: {this.state.uvIndex}</p>
        </div>
      );
    }
  }
}

export default Card;
