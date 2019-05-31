import React, { Component } from "react";

import EpisodeCard from "../Cards/EpisodeCard.jsx";

import { Col } from "reactstrap";

class Grid extends Component {
  render() {
    const episodes = Object.values(this.props.episodes);
    return (
      <div className="mb-4">
        {episodes.map((episode, index) => {
          return (
            <Col className="p-0">
              <EpisodeCard episode={episode} />
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Grid;
