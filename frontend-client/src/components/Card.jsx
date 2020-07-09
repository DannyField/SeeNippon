import React from "react";
// import "./stylesheets/Card.css";

class Card extends React.Component {
  state = { weather: [] };

  getWeather = async () => {
    const response = await fetch(
      "http://api.weatherstack.com/current?access_key=38dc0a08ba364082a8994237ba2f5d65&query=Tokyo"
    );
    const data = await response.json();
    // console.log(data);
    // console.log(data.current.temperature);
    this.setState({ weather: data });
    // console.log("hello");
    // console.log(this.state);
  };

  async componentDidMount() {
    this.getWeather();
  }

  render() {
    const weather = this.state?.weather;
    console.log(weather);
    return (
      <div className="card">
        {weather &&
          weather.map((weather, index) => {
            return <p>{weather.current}</p>;
          })}
      </div>
    );
  }
}

export default Card;

// render() {
//     const countries = this.state?.countries;
//     return (
//       <div className="App">
//         <p>250 Countries with their Flags!</p>
//       {countries &&
//       countries.map((country, index) => {
//         return (
//         <Country key={index}
//         name={country.name}
//         flag={country.flag}
//         />
//       );
//       })}
//       </div>
//     );
//   }
// }
