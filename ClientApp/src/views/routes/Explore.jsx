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

import * as PodcastApiUtil from "../../util/podcast_api_util";

class Explore extends Component {
  constructor() {
    super();

    this.state = {
      Items: [],
      pageOfItems: []
    };
  }

  componentDidMount() {
    PodcastApiUtil.getAllPodcasts().then(response =>
      this.setState({ Items: response })
    );
  }

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    const { pageOfItems, Items } = this.state;

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
              <Grid className="m-0" podcasts={pageOfItems} />
              <Pagination items={Items} onChangePage={this.onChangePage} />
            </Container>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Explore;
