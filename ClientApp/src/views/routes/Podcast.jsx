import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// index page sections
import SimpleHeader from "../sections/SimpleHeader.jsx";

import Line from "components/Grids/Line.jsx";

import * as PodcastApiUtil from "../../util/podcast_api_util";

class Podcast extends Component {
  constructor() {
    super();

    this.state = {
      podcast: {},
      author: {},
      episodes: []
    };
  }

  componentDidMount() {
    PodcastApiUtil.getPodcastById(this.props.location.state.id).then(
      response => {
        this.setState({
          podcast: response,
          author: response.author,
          episodes: response.episodes
        });
      }
    );
  }

  render() {
    const { title, description, imgSrc, subscribers } = this.state.podcast;

    return (
      <Fragment>
        <MainNavbar />
        <main ref="main">
          <SimpleHeader />
          <section>
            <Row className="pt-5 pb-2 px-6 bg-secondary">
              <Col sm="3">
                <img src={imgSrc} width="100%" />
                <h6 className="text-center my-2">{subscribers} Subscribers</h6>
              </Col>
              <Col sm="9">
                <h2 className="display-3 text-uppercase">{title}</h2>
                <h4 className="my-2">{this.state.author.name}</h4>
                <p>{description}</p>
                <div className="my-2">
                  <Button className="shadow-none ">Share</Button>
                  <Button className="shadow-none ">Subscribe</Button>
                </div>
              </Col>
            </Row>
            <Container>
              <Row>
                <Col sm="">
                  <h4 className="text-success font-weight-bold mt-4">
                    Episodes
                  </h4>
                  <Line episodes={this.state.episodes} />
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Podcast;
