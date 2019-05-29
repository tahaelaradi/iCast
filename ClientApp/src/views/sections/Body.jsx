import React, { Component, Fragment } from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip, UncontrolledCarousel, Badge } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/img-1.jpeg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-3.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Body extends Component {
  render() {
    return (
      <Fragment>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">
                  Podcast lovers,
                  <span className="text-success">
                    REJOICE!
                  </span>
                </h2>
                <p className="lead">
                  iCast is the best way to find, organize and enjoy your
                  favoruite podcasts! Stream over thousands of podcasts,
                  ad-free.
                </p>
                <div className="btn-wrapper">
                  <Button
                    className="mb-3 mb-sm-0"
                    color="primary"
                    href=""
                  >
                    Check Our Library!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pb-0 bg-gradient-warning">
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="display-3 text-white">
                  Stay tuned, wherever you go!
                </h1>
                <p className="lead text-white mt-4">
                  Browse our podcast playlists curated by podcast experts &
                  listeners like you, or explore some of our popular categories
                  like Trending on RadioPublic, Indies to Watch, News & Current
                  Events, Portraits of People, Interviews with Musicians.
                  Follow your favorite shows & get notified when new episodes
                  are published.
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/promo-1.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h3>What that make iCast the perfect podcasting source for you?</h3>
                  <p>
                    iCast is the world's most powerful podcast platform, an app
                    by listeners, for listeners. Our podcast player provides
                    next-level listening, search and discovery features.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-books" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Ever-Expanding Library
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-headphones" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            High Quality Audio
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-button-play" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Play your favoruite podcasts offline!
                          </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-curved-next" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Share podcasts & episodes with friends!
                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Body;
