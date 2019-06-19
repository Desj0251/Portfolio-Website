// =================================================================================
// ==   File    : App.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from "react";

import "./App.css";
import { _SIDE_NAV_LIST, _APP_STRINGS } from "../../config/App.config";

import MainContent from "./components/Content";
import { SideNav, SideNavCondensed } from "./components/SideNav";
import TopNav from "./components/TopNav";

// =================================================================================
// === App.Component :
// =================================================================================
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SideNav: {
        isDrawerOpen: true,
        isActive: _SIDE_NAV_LIST[0].id
      }
    };
  }

  toggleDrawer = () => {
    this.setState({
      SideNav: {
        isDrawerOpen: !this.state.SideNav.isDrawerOpen,
        isActive: this.state.SideNav.isActive
      }
    });
  };

  toggleActive = _newProps => {
    this.setState({
      SideNav: {
        isDrawerOpen: this.state.SideNav.isDrawerOpen,
        isActive: _newProps
      }
    });
  };

  render() {
    return (
      <div className="App">
        <TopNav
          _title={_APP_STRINGS.TopNav.Title}
          _toggle={this.toggleDrawer.bind()}
        />
        <div className="d-flex App_ContentArea App_content-height">
          {this.state.SideNav.isDrawerOpen && (
            <SideNav
              _isActive={this.state.SideNav.isActive}
              _toggle={this.toggleActive.bind()}
            />
          )}
          {!this.state.SideNav.isDrawerOpen && (
            <SideNavCondensed
              _isActive={this.state.SideNav.isActive}
              _toggle={this.toggleActive.bind()}
            />
          )}
          <MainContent _content={this.state.SideNav.isActive} />
        </div>
      </div>
    );
  }
}
