import React from "react";
import Blogs from "./Blogs";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import Home from "./Home";
import Blog from "./Blog";
import NoMatch from "./NoMatch";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={Blog} />
          <Route exact path="/blogs/:id/edit" component={EditBlog} />
          <Route exact path="/blogs/create" component={CreateBlog} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

export default App;
