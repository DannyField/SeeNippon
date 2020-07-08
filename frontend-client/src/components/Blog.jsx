import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  deleteBlog = async (id) => {
    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });
    window.alert("Deleted The Post! Why!!");
    this.props.history.push("/blogs");
  };

  render() {
    const b = this.props.location.state;
    console.log(this.props);
    return (
      <div>
        <h1>{b.title}</h1>
        <h3>{b.city}</h3>
        <h2>{b.prefecture} prefecture</h2>
        <p>{b.description}</p>
        <img src={b.image} alt="blog post photograph"/>
        <h1>{b.image}</h1>

        <button onClick={this.props.history.goBack}>Back</button>
        <Link to={`/blogs/${b.id}/edit`}>
          <button>Edit</button>
        </Link>
        <span onClick={() => this.deleteBlog(b.id)}>
          <button>Delete</button>
        </span>
      </div>
    );
  }
}

export default Blog;
