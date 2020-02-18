import Avatar from "./avatar";
import Username from "./username";
import Bio from "./bio";
import { Container } from "reactstrap";
import React, { Component } from "react";

export default class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <center>
            <Avatar />
          </center>
          <h3>
            <Username Username="Joker Sujoker" />
          </h3>
          <p className="title">
            <Bio />
          </p>
          <button>Liat Selengkapnya!</button>
        </div>
      </div>
    );
  }
}
