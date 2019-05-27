import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

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
        <MainNavbar />
        <main ref="main">
          <Header />
        </main>
        <Footer />
      </ Fragment>
    );
  }
}

export default Index;
