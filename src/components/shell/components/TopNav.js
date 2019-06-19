// =================================================================================
// ==   File    : TopNav.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================
import React from "react";

export default function TopNav(props) {
  return (
    <nav className="App_TopNav navbar fixed-top text-light d-flex justify-content-between">
      <div className="form-inline">
        <TopNavButton _icon="fas fa-bars" _onClick={props._toggle} />
        <span className="navbar-brand mb-0 h1 ml-3">{props._title}</span>
      </div>
    </nav>
  );
}

function TopNavButton(props) {
  return (
    <button
      className={`btn btn-outline-light ${props._extra}`}
      type="button"
      onClick={props._onClick}
    >
      <i className={props._icon} />
    </button>
  );
}
