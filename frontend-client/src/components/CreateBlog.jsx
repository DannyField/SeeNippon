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
      <div className="form-container-blog">
        <form className="blog-form" onSubmit={this.onFormSubmit}>
        <h1>Add A Blog Post & Tips:</h1>
          <label htmlFor="title">Title:</label>
          <input className="blog-input"
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipOne">City:</label>
          <input className="blog-input"
            type="text"
            name="city"
            id="city"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipOne">Prefecture:</label>
          <input className="blog-input"
            type="text"
            name="prefecture"
            id="prefecture"
            onChange={this.onInputChange}
          />
          <label htmlFor="description">Blog Post:</label>
          <textarea className="blog-input"
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="TipOne">Tip One:</label>
          <input className="blog-input"
            type="text"
            name="tipOne"
            id="tipOne"
            onChange={this.onInputChange}
          />
          <label htmlFor="tipTwo">Tip Two:</label>
          <input className="blog-input"
            type="text"
            name="tipTwo"
            id="tipTwo"
            onChange={this.onInputChange}
          />
          <label htmlFor="TipThree">Tip Three:</label>
          <input className="blog-input"
            type="text"
            name="tipThree"
            id="tipThree"
            onChange={this.onInputChange}
          />
          <label htmlFor="Photo">Photo Url:</label>
          <input className="blog-input"
            type="text"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />
          <br />
          <input type="submit" value="Add Entry" />
        </form>
      </div>
    );
  }
}
export default CreateBlog;
