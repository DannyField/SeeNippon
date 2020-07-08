import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blogs">All Blogs</Link>
        <Link to="/blogs/create">Create A Blog</Link>
      </nav>
    );
  }
}

export default Navbar;
