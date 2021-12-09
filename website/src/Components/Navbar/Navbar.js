import React, { Component } from "react";
import $ from "jquery";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.pageItem = {
      width: "5%",
      minWidth: "65px",
      alignItems: "center",
      color: "white",
      display: "flex",
      textAlign: "center",
      alignContent: "center",
      backdropFilter: "blur(5px)",
      webkitBackdropFilter: "blur(5px)"
    };
    this.pageName = {
      width: "100%",
      fontSize: "115%",
      cursor: "pointer",
    };
  }

  scrollToTop = () => {
    $("html").animate({ scrollTop: 0 }, 500);
  };

  scrollToBot = () => {
    $("html").animate({ scrollTop: 10000 }, 500);
  };

  render() {
    return (
      <div
        style={{
          height: "6%",
          width: "100%",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1",
          display: "flex",
        }}
      >
        <img
          src="logo_white.png"
          style={{ height: "100%", left: "0", paddingTop: "0.2%" }}
        ></img>
        <div
          onClick={this.scrollToTop}
          style={{
            paddingLeft: "2%",
            height: "100%",
            width: "100px",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "150%",
            }}
          >
            Robby
          </span>
        </div>
        <div
          className="page-list"
          style={{
            paddingLeft: "10%",
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          <div style={this.pageItem}>
            <span style={this.pageName}>About</span>
          </div>
          <div style={this.pageItem}>
            <span style={this.pageName}>FAQ</span>
          </div>
          <div style={this.pageItem}>
            <span style={this.pageName}>Blog</span>
          </div>
          <div onClick={this.scrollToBot} style={this.pageItem}>
            <span style={this.pageName}>Contact</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
