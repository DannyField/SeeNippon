import React from "react";
import "../stylesheets/Card.css";

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
    // const weather = this.state?.weather;
    // console.log(weather);
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
            flights to Tokyo and Osaka from Sydney. Other airlines that operate
            flights to Japan are: China Southern, Air Asia, Qantas, Thai Airways
            and Jetstar.
          </p>
        </div>
        {/* <p>{weather.current}</p>; */}
      </div>
    );
  }
}
export default Card;

/* <div className="card">
<h1>About Japan Here</h1>
<p>
  Japan is an amazing place to visit. Drink sake with the locals. Visit
  the many shires hidden among lush landscapes.
</p>
{/* <p>{this.state?.weather}</p> */

// </div> */}
