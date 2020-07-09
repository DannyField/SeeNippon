import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../stylesheets/Navbar.css'
import '../stylesheets/japan.css'

const Navbar = () => {
  const history = useHistory();

  // render() {
    return (

      <nav className="flex-nav">
        <div className="jp-container">
          <div className="grid">
            <div className="column-xs-9 column-md-6">
              <p id="logo">See Nippon!<span id="highlight">.</span></p>
            </div>
            <div className="column-xs-3 column-md-6">
              <a href="#" className="toggle-nav">Menu <i className="ion-navicon-round"></i></a>
              <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link to="/blogs">All Blogs</Link></li>
                <li><Link to="/blogs/create">Create</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/sign-up">Sign Up</Link></li>
                <li><span onClick={() => {localStorage.removeItem("token");
                history.push("/login");}}>Logout</span></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
