import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{
            height: "50px",
            width: "100%",
            position: "fixed",
            backgroundColor: "black"
        }}></div>
    );
  }
}

export default Navbar;
