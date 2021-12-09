import React, { Component } from "react";

export class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{
            height: "60px",
            width: "100%",
            position: "fixed",
            backgroundColor: "black",
            zIndex: "1"
        }}></div>
    );
  }
}

export default Navbar;
