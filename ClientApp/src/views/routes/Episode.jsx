import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// index page sections
import Header from "../sections/Header.jsx";

class Episode extends Component {
  constructor() {
    super();

    this.state = {
      episode: {}
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    var episode = {
      id: 100,
      url: "podcast-1/episode-100",
      title: "podcast 1: " + this.props.match.params.episode,
      author: "some author",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likes: 125,
      podcast_title: "Podcast 1"
    };

    this.setState({ episode });
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
                </Col>
                <Col sm="9">
                  <h2 className="display-3 text-uppercase">
                    {this.state.episode.title}
                  </h2>
                  <h4 className="my-2">{this.state.episode.author}</h4>
                  <div className="">
                    <audio className="mb-2" controls />
                    <Button className="shadow-none float-right">Like</Button>
                  </div>
                  <div className="my-2 py-2">
                    <span className="">{this.state.episode.description}</span>
                  </div>
                  <div>
                    <h4 className="text-success font-weight-bold mt-2">
                      Comments
                    </h4>
                    <div className="mb-4">
                      <div className="my-2">
                        <span>Comment 1</span>
                      </div>
                      <div className="my-2">
                        <span>Comment 2</span>
                      </div>
                      <div className="my-2">
                        <span>Comment 3</span>
                      </div>
                    </div>
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

export default Episode;
