import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// Other components
import Pagination from "components/Pagination/PaginationBar.jsx";
import Grid from "components/Grids/Grid.jsx";

// index page sections
import SimpleHeader from "../sections/SimpleHeader.jsx";

class Explore extends Component {
  constructor() {
    super();

    var exampleItems = [...Array(150).keys()].map(i => ({
      id: i + 1,
      url: "podcast-" + i,
      title: "Podcast " + (i + 1),
      author: "Author" + (i + 100),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    return (
      <Fragment>
        <MainNavbar />
        <main ref="main">
          <SimpleHeader />
          <section className="section section-components pb-0">
            <Container>
              <Row>
                <h2 className="display-3 my-2">Explore</h2>
              </Row>
              <Grid className="m-0" podcasts={this.state.pageOfItems} />
              <Pagination
                items={this.state.exampleItems}
                onChangePage={this.onChangePage}
              />
            </Container>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Explore;
