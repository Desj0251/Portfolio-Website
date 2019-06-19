// =================================================================================
// === Imports :
// =================================================================================
// import React from "react";
// import Home from "../home/Home";

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
  new _navitem("NAV_001", "Home", "fas fa-home", null)
];
export const _SIDE_NAV_APPS = [
  new _navitem(
    "APP_001",
    "Placeholder Application with Long Text",
    "fab fa-dev",
    null
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
    Apps_Header: "Application Showcase"
  }
};
