import React from "react";
import "../stylesheets/Form.css";

class CreateBlog extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log(this.state)
    console.log(this.props)
    console.log(this.body)
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const body = {
      blog: this.state
    }

    await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(body),
    });
    this.props.history.push("/blogs");
  };

  render() {
    console.log(this.state)
    console.log(localStorage.getItem('token'))
    return (
      <div className="form-container">
        <h1>Add A Blog Post & Tips:</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="description">Blog Post</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="Photo">Photo</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipOne">City</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipOne">Prefecture</label>
          <input
            type="text"
            name="prefecture"
            id="prefecture"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipOne">Tip One</label>
          <textarea
            name="tipOne"
            id="tipOne"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="tipTwo">Tip Two</label>
          <textarea
            name="tipTwo"
            id="tipTwo"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="TipThree">Tip Three</label>
          <textarea
            name="tipThree"
            id="tipThree"
            onChange={this.onInputChange}
          ></textarea>
          <input type="submit" value="Add Entry" />
        </form>
      </div>
    );
  }
}
export default CreateBlog;
