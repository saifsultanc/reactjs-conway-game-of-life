import React, { Component } from "react";
import { ButtonToolbar, Dropdown } from "react-bootstrap";

class Buttons extends Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn" onClick={this.props.fast}>
            Fast
          </button>
          <button className="btn" onClick={this.props.seed}>
            Seed
          </button>
          <Dropdown onSelect={this.handleSelect} id="size-menu">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Grid Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
              <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
              <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
