import React, { Component, Fragment } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class SimpleHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="position-relative">
          <section className="section section-lg section-header section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default SimpleHeader;
