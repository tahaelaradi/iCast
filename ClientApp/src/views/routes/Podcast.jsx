import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// index page sections
import Header from "../sections/Header.jsx";

import Line from "components/Grids/Line.jsx";

class Podcast extends Component {
  constructor() {
    super();

    var podcast = {
      id: 1,
      url: "podcast-1",
      title: "Podcast 1",
      author: "Author 1",
      subscribers: 325000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };

    var episodes = {
      1: {
        id: 100,
        url: "podcast-1/episode-100",
        title: "podcast 1: episode 100",
        description: "Episode 100 is about ...",
        likes: 125
      },
      2: {
        id: 200,
        url: "podcast-1/episode-200",
        title: "podcast 2: episode 200",
        description: "Episode 200 is about ...",
        likes: 250
      },
      3: {
        id: 300,
        url: "podcast-1/episode-300",
        title: "podcast 3: episode 300",
        description: "Episode 300 is about ...",
        likes: 325
      }
    };

    this.state = {
      podcast: podcast,
      episodes: episodes
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    var imgsrc = require("assets/img/theme/img-3.jpg");

    return (
      <Fragment>
        <MainNavbar />
        <main ref="main">
          <Header />
          <section className="section section-components pb-0">
            <Container>
              <Row>
                <Col sm="3">
                  <img src={imgsrc} width="100%" />
                  <h6 className="text-center my-2">
                    {this.state.podcast.subscribers} Subscribers
                  </h6>
                </Col>
                <Col sm="9">
                  <h2 className="display-3 text-uppercase">
                    {this.state.podcast.title}
                  </h2>
                  <h4 className="my-2">{this.state.podcast.author}</h4>
                  <p>{this.state.podcast.description}</p>
                  <div className="my-2">
                    <Button className="shadow-none ">Share</Button>
                    <Button className="shadow-none ">Subscribe</Button>
                  </div>
                  <div className="border-top">
                    <h4 className="text-success font-weight-bold mt-4">
                      Episodes
                    </h4>
                    <Line episodes={this.state.episodes} />
                  </div>
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
