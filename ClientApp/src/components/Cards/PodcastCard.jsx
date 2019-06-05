import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    const { podcast } = this.props;

    var description =
      podcast.description.length < DescriptionLimit
        ? podcast.description
        : podcast.description.slice(0, DescriptionLimit) + "...";

    return (
      <Card className="shadow-sm m-2 bg-white rounded">
        <CardBody>
          <CardTitle className="text-uppercase p-2 mb-2">
            <Link
              className="shadow-none text-center"
              to={{
                pathname: podcast.url,
                state: { id: podcast.id }
              }}
            >
              {podcast.title}
            </Link>
          </CardTitle>
          <CardSubtitle className="font-italic">
            {podcast.author.name}
          </CardSubtitle>
          <Row className="my-2">
            <Col sm="4">
              <CardImg
                top
                width="100%"
                src={podcast.imgSrc}
                alt="Card image cap"
                href={"player/" + podcast.id}
              />
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
