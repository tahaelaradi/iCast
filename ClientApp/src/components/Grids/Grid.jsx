import React, { Component } from "react";

import PodcastCard from "components/Cards/PodcastCard.jsx";

import { Row, Col } from "reactstrap";

const GridSize = 2;

class Grid extends Component {
  render() {
    var podcasts = this.props.podcasts.chunk(GridSize).map((row, index) => {
      var extraSpace = [];
      if (row.length !== GridSize) {
        for (let i = 0; i < GridSize - row.length; i++) {
          extraSpace.push(<Col className="p-0" />);
        }
      }

      return (
        <Row key={index}>
          {row.map((item, index) => {
            return (
              <Col className="p-0">
                <PodcastCard key={index} podcast={item} />
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
