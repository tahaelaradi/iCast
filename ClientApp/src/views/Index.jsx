import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// index page sections
import Header from "./sections/Header.jsx";

class Index extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <Fragment>
        <main ref="main">
          <Header />
        </main>
      </ Fragment>
    );
  }
}

export default Index;
