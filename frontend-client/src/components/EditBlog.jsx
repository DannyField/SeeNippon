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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    window.alert("Blog Details Updated");
    this.props.history.push("/blogs");
  };

  async componentDidMount() {
    const { id } = this.state;
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        <div className="form-container-blog">
          <form className="blog-form" onSubmit={this.onFormSubmit}>
            <h1>Onegaishimasu</h1>
            <h3>Edit Your Blog</h3>
            <label htmlFor="title">Title</label>
            <input
              className="blog-input"
              type="text"
              name="title"
              id="title"
              onChange={this.onInputChange}
              value={title}
            />

            <label htmlFor="description">Blog Post</label>
            <textarea
              className="blog-input"
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
              className="blog-input"
              type="text"
              name="image"
              id="image"
              onChange={this.onInputChange}
              value={image}
            />

            <label htmlFor="city">City</label>
            <input
              className="blog-input"
              type="text"
              name="city"
              id="city"
              onChange={this.onInputChange}
              value={city}
            />

            <label htmlFor="prefecture">Prefecture</label>
            <input
              className="blog-input"
              type="text"
              name="prefecture"
              id="prefecture"
              onChange={this.onInputChange}
              value={prefecture}
            />
            <hr />
            <label htmlFor="tipOne">Tip 1</label>
            <input
              className="blog-input"
              type="text"
              name="tipOne"
              id="tipOne"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipOne}
            />

            <label htmlFor="tipTwo">Tip 2</label>
            <input
              className="blog-input"
              type="text"
              name="tipTwo"
              id="tipTwo"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipTwo}
            />

            <label htmlFor="tipThree">Tip 3</label>
            <input
              className="blog-input"
              type="text"
              name="tipThree"
              id="tipThree"
              onChange={this.onInputChange}
              cols="30"
              rows="10"
              value={tipThree}
            />
            <br/>
            <input type="submit" value="Submit" />
          </form>
          <button className="back" onClick={this.props.history.goBack}>Back</button>
        </div>
      )
    );
  }
}

export default EditBlog;
