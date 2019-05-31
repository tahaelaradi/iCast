import React, { Component } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const DescriptionLimit = 180;

class PaginationBar extends Component {
  render() {
    var imgsrc = require("assets/img/theme/img-3.jpg");
    var description =
      this.props.item.description.length < DescriptionLimit
        ? this.props.item.description
        : this.props.item.description.slice(0, DescriptionLimit) + "...";

    return (
      <Card className="shadow-sm m-2 bg-white rounded">
        <CardBody>
          <CardTitle className="text-uppercase p-2 mb-2" >
            <a
              className="shadow-none text-center"
              href={"podcast/" + this.props.item.url}
            >
            {this.props.item.title}
            </a>
          </CardTitle>
          <CardSubtitle className="font-italic">
            {this.props.item.author}
          </CardSubtitle>
          <Row className="my-2">
            <Col sm="4">
              <CardImg top width="100%" src={imgsrc} alt="Card image cap" href={"player/" + this.props.item.id}/>
            </Col>
            <Col sm="8">
              <CardText className="">{description}</CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default PaginationBar;
