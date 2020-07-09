import React from "react";
import "../stylesheets/Form.css";

class EditBlog extends React.Component {
  state = {
    title: "",
    description: "",
    image: "",
    city: "",
    prefecture: "",
    tipOne: "",
    tipTwo: "",
    tipThree: "",
    loading: true,
    id: this.props.match.params.id,
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const {
      id,
      title,
      description,
      image,
      city,
      prefecture,
      tipOne,
      tipTwo,
      tipThree,
    } = this.state;
    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title,
        description,
        image,
        city,
        prefecture,
        tipOne,
        tipTwo,
        tipThree,
      }),
    });
    window.alert("Blog Details Updated")
    this.props.history.push("/blogs");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });
    const {
      title,
      description,
      image,
      city,
      prefecture,
      tipOne,
      tipTwo,
      tipThree,
    } = await response.json();
    this.setState({
      title,
      description,
      image,
      city,
      prefecture,
      tipOne,
      tipTwo,
      tipThree,
      loading: false,
    });
  }

  render() {
    const {
      title,
      description,
      image,
      city,
      prefecture,
      tipOne,
      tipTwo,
      tipThree,
      loading,
    } = this.state;
    return (
      !loading && (
        <div className="form-container">
          <h1>Onegaishimasu Edit Your Blog</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.onInputChange}
              value={title}
            />

            <label htmlFor="description">Blog Post</label>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={description}
            ></textarea>

            <label htmlFor="image">Add an Image</label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={this.onInputChange}
              value={image}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              onChange={this.onInputChange}
              value={city}
            />

            <label htmlFor="prefecture">Prefecture</label>
            <input
              type="text"
              name="prefecture"
              id="prefecture"
              onChange={this.onInputChange}
              value={prefecture}
            />
            <hr></hr>
            <label htmlFor="tipOne">Tip 1</label>
            <textarea
              type="text"
              name="tipOne"
              id="tipOne"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipOne}
            ></textarea>

            <label htmlFor="tipTwo">Tip 2</label>
            <textarea
              type="text"
              name="tipTwo"
              id="tipTwo"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipTwo}
            ></textarea>

            <label htmlFor="tipThree">Tip 3</label>
            <textarea
              type="text"
              name="tipThree"
              id="tipThree"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipThree}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.props.history.goBack}>Back</button>
        </div>
      )
    );
  }
}

export default EditBlog;
