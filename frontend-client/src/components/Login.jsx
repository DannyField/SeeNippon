import React from "react";
import "../stylesheets/login.css"

class Login extends React.Component {
  state = { email: "", password: "", errMessage: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/");
        window.location.reload();
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    const { email, password, errMessage } = this.state;
    return (
      <div className="form-container login-form" style={{height:"82vh"}}>
        {/* <div className="image-container">
          <img id="login-image" src="seenippon_fig3.jpg" alt="login-image"/>
        </div> */}
        <div id="loginform-wrapper">
        {errMessage && <span>{errMessage}</span>}
        <form className="loginform"onSubmit={this.onFormSubmit}>
        <h1 className="login-h1">Login</h1>
        <br/>
          <label className="login-label" htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onInputChange}
          />
          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.onInputChange}
          />
          <br/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
