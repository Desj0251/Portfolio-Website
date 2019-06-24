// =================================================================================
// ==   File    : index.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from "react";
import "./index.css";

export default class App extends Component {
  // --- Constructor :
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="Application" />;
  }
}
