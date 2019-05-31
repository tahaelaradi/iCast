import React, { Component } from "react";

import PodcastCard from "components/PodcastCard/PodcastCard.jsx";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

const GridSize = 2;

class Grid extends Component {
  render() {
    var podcasts = this.props.podcasts.chunk(GridSize).map(row => {
      var extraSpace = [];
      if (row.length != GridSize) {
        for (let i = 0; i < GridSize - row.length; i++) {
          extraSpace.push(<Col className="p-0" />);
        }
      }
      console.log(extraSpace);

      return (
        <Row>
          {row.map((item, index) => {
            return (
              <Col className="p-0">
                <PodcastCard item={item} />
              </Col>
            );
          })}
          {extraSpace}
        </Row>
      );
    });

    return <div>{podcasts}</div>;
  }
}

export default Grid;

Object.defineProperty(Array.prototype, "chunk", {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply(
      [],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});
