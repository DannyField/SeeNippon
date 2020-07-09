import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../stylesheets/Navbar.css'

const Navbar = () => {
  const history = useHistory();

  // render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blogs">All Blogs</Link>
        <Link to="/blogs/create">Create A Blog</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        <span
          onClick={() => {
            localStorage.removeItem("token");
            history.push("/login");
          }}
        >
          Logout
        </span>
      </nav>
    );
  }
// }

export default Navbar;
