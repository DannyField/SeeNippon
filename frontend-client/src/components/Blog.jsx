import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  deleteBlog = async (id) => {
    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
    window.alert("Deleted The Post!");
    this.props.history.push("/blogs");
  };

  render() {
    const b = this.props.location.state;
    console.log(this.props);
    return (
      <div>
        <h1>{b.title}</h1>
        <h3>City: {b.city}</h3>
        <h2>Prefecture: {b.prefecture}</h2>
        <hr/>
        <p>Tip One: {b.tipOne}</p>
        <p>Tip Two: {b.tipTwo}</p>
        <p>Tip Three: {b.tipThree}</p>
        <hr/>
        <p>{b.description}</p>
        <hr/>
        <img src={b.image} alt="blog post photograph"/>

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
