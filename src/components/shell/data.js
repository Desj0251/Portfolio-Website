// =================================================================================
// ==   File    : Home.data.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React from "react";

import Home from "../home/Home";
import RandomUser from "../apps/readonlyapi/randomuser";

// =================================================================================
// === Custom Classes :
// =================================================================================
class _navitem {
  constructor(id, title, icon, content) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.content = content;
  }
}

// =================================================================================
// === Constants :
// =================================================================================
export const _SIDE_NAV_LIST = [
  new _navitem("NAV_001", "Home", "fas fa-home", Home),
  new _navitem("NAV_002", "Dashboard", "fas fa-tachometer-alt", null),
  new _navitem("NAV_003", "Game Library", "fas fa-gamepad", null)
];

export const _SIDE_NAV_APPS = [
  new _navitem("APP_001", "Read-Only APIs", "fas fa-network-wired", RandomUser)
];
export const _TOP_NAV_LIST = [
  new _navitem(
    "TOP_001",
    "Notifications",
    "fas fa-bell",
    <div className="bunch-o-content" />
  ),
  new _navitem(
    "TOP_002",
    "Settings",
    "fas fa-cog",
    <div className="bunch-o-content" />
  ),
  new _navitem(
    "TOP_003",
    "Profile",
    "fas fa-user-astronaut",
    <div className="bunch-o-content" />
  )
];

// =================================================================================
// === Strings :
// =================================================================================
export const _APP_STRINGS = {
  TopNav: {
    Title: "Navbar"
  },
  SideNav: {
    List_Header: "Main Navigation",
    Apps_Header: "Applications"
  }
};
