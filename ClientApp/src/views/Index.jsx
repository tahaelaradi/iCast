import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// index page sections
import Header from "./sections/Header.jsx";
import Body from "./sections/Body.jsx"

class Index extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Fragment>
        <MainNavbar />
        <main ref="main">
          <Header />
          <Body />
        </main>
        <Footer />
      </ Fragment>
    );
  }
}

export default Index;
