import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/BlogIndex.css';

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
        <div className="blog-index" key={index}>
          <Link to={{ pathname: `/blogs/${blogs.id}`, state: blogs }}>          
          <h3 className="blog-index-title">{blogs.title}</h3>
          <p>City: {blogs.city}</p>
          <img className="index-image" src={blogs.image} alt="blog post photograph"/>
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="blog-index-container">
        {this.renderBlogs()}
      </div>
    );
  }

  async componentDidMount() {
    this.getBlogs();
  }
}

export default Blogs;
