import React, { Component } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const DescriptionLimit = 180;

class PaginationBar extends Component {
  render() {
    var imgsrc = require("assets/img/theme/img-3.jpg");
    var description =
      this.props.episode.description.length < DescriptionLimit
        ? this.props.episode.description
        : this.props.episode.description.slice(0, DescriptionLimit) + "...";

    return (
      <Card className="shadow-sm bg-white rounded">
        <CardBody>
          <CardTitle className="text-uppercase mb-2">
            <a
              className="shadow-none text-center"
              href={this.props.episode.url}
            >
              {this.props.episode.title}
            </a>
          </CardTitle>
          <Row className="my-2">
            <Col className="my-2" sm="10">
              <CardText className="">{description}</CardText>
            </Col>
            <Col className="my-2" sm="2">
              <Button className="shadow-none rounded-circle">
                <i className="ni ni-button-play" />
              </Button>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <span className="">
                <i className="ni ni-favourite-28 mr-2" />
                {this.props.episode.likes}
              </span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default PaginationBar;
