import React from "react";
import { Link } from "react-router-dom";

class Blogs extends React.Component {
  state = { blogs: [] };

  getBlogs = async () => {
    const response = await fetch("http://localhost:3000/blogs/");
    const data = await response.json();
    this.setState({ blogs: data });
    console.log(this.state);
  };

  renderBlogs = () => {
    return this.state.blogs.map((blogs, index) => {
      return (
        <div key={index}>
          <p>Prefecture</p>
          <h1>{blogs.title}</h1>
          <p>{blogs.city}</p>
          <Link to={{ pathname: `/blogs/${blogs.id}`, state: blogs }}>
            <button>Show</button>
            <p>{blogs.image}</p>
          </Link>
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
