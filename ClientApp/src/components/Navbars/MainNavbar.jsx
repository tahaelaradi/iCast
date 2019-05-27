import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class MainNavbar extends Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <Fragment>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/icast-logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <NavLink href="/podcasts">
                      <span className="nav-link-inner--text">Explore</span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Categories</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/podcasts/politics" tag={Link}>
                        News & Politics
                      </DropdownItem>
                      <DropdownItem to="/podcasts/business" tag={Link}>
                        Business
                      </DropdownItem>
                      <DropdownItem to="/podcasts/sports" tag={Link}>
                        Sports
                      </DropdownItem>
                      <DropdownItem to="/podcasts/music" tag={Link}>
                        Music
                      </DropdownItem>
                      <DropdownItem to="/podcasts/food" tag={Link}>
                        Food
                      </DropdownItem>
                      <DropdownItem to="/podcasts/comedy" tag={Link}>
                        Comedy
                      </DropdownItem>
                      <DropdownItem to="/podcasts/education" tag={Link}>
                        Education
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <NavLink href="/podcasts/new">
                      <span className="nav-link-inner--text">New</span>
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <NavLink href="/blog">
                      <span className="nav-link-inner--text">Blog</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                  <NavLink href="/podcasts">
                    <span className="nav-link-inner--text">Sign In</span>
                  </NavLink>
                </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </Fragment>
    );
  }
}

export default MainNavbar;
