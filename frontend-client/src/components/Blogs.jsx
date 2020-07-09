import React from "react";
import { Link } from "react-router-dom";

class Blogs extends React.Component {
  state = { blogs: [] };

  getBlogs = async () => {
    const response = await fetch("http://localhost:3000/blogs/", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const data = await response.json();
    this.setState({ blogs: data });
    console.log(this.state);
  };

  renderBlogs = () => {
    return this.state.blogs.map((blogs, index) => {
      return (
        <div key={index}>
          <h3>{blogs.title}</h3>
          <p>{blogs.city}</p>
          <Link to={{ pathname: `/blogs/${blogs.id}`, state: blogs }}>
            <button>Show</button>
          </Link>
          <hr />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Handy Tips!</h1>
        {this.renderBlogs()}
      </div>
    );
  }

  async componentDidMount() {
    this.getBlogs();
  }
}

export default Blogs;
