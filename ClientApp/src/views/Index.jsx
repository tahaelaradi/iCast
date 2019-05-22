import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

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
        </main>
      </ Fragment>
    );
  }
}

export default Index;
