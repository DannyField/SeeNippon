import React from "react";

class Blogs extends React.Component {
  state = { blogs: [] };

  getBlogs = async () => {
    const response = await fetch("http://localhost:3000/blogs/");
    const data = await response.json();
    this.setState({ blog: data });
    console.log(data);
  };

  renderBlogs = () => {
    return this.state.blogs.map((blogs, index) => {
      return (
        <div key={index}>
          <p>Prefecture</p>
          <h1>{blogs.title}</h1>
          <p>{blogs.city}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Stuff</h1>
        {this.renderBlogs()}
      </div>
    );
  }

  async componentDidMount() {
    this.getBlogs();
  }
}

export default Blogs;
