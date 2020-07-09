import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/BlogView.css';
import moment from 'moment';

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
      <div className="blog-view">
        <h1>{b.title}</h1>
        <h2>Prefecture: {b.prefecture}</h2>
        <h3>City: {b.city}</h3>
        <span>Added: {moment(b.created_at).startOf('minute').fromNow()}</span>
        <hr/>
        <p>Tip One: {b.tipOne}</p>
        <p>Tip Two: {b.tipTwo}</p>
        <p>Tip Three: {b.tipThree}</p>
        <hr/>
        <img className="blog-post-img"src={b.image} alt="blog post photograph"/>
        <p>{b.description}</p>
        <hr/>
        <div className="edit-back-delete">
          <button className="edit-back-delete-button" onClick={this.props.history.goBack}>Back</button>
          <Link to={`/blogs/${b.id}/edit`}>
            <button className="edit-back-delete-button" >Edit</button>
          </Link>
          <span onClick={() => this.deleteBlog(b.id)}>
            <button className="edit-back-delete-button" >Delete</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Blog;
