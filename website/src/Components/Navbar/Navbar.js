import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

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
      alignContent: "center"
    };
    this.pageName = {
      width: "100%",
      fontSize: "115%",
      cursor: "pointer",
      color: "white",
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
          <Link className="nav-link" to={"/"}>
            <span
              style={{
                cursor: "pointer",
                color: "white",
                fontSize: "150%",
              }}
              >
              Robby
            </span>
          </Link>
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
              <Link className="nav-link" to={"/about"}>
                <span style={this.pageName}>About</span>
              </Link>
            </div>
            <div style={this.pageItem}>
              <Link className="nav-link" to={"/faq"}>
                <span style={this.pageName}>FAQ</span>
              </Link>
            </div>
            <div style={this.pageItem}>
              <a href="https://discord.gg/UWUT9yG2Dh" target={"_blank"} style={{ color: 'white', textDecoration: 'none' }}>
                <span style={this.pageName} >Blog</span>
              </a>
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
