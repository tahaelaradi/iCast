import React, { Component, Fragment } from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  We would love to hear from you!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Feel free to reach out and contact us.
                </h4>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="http://www.tahaelaradi.com"
                  >
                    Taha Elaradi
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      Sitemap
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </ Fragment>
    );
  }
}

export default Footer;
