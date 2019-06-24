// =================================================================================
// ==   File    : App.config.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
// === Main Navigation Page Imports
import Home from "../components/navigation/home/index";
// === Application Showcase Page Imports
import App_001 from "../components/applications/App_001/index";

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
  new _navitem(
    "NAV_001",
    { en: "Home", fr: "Page d'Accueil" },
    "fas fa-home",
    Home
  )
];
export const _SIDE_NAV_APPS = [
  new _navitem(
    "APP_001",
    { en: "UI Test #1", fr: "UI Test #1" },
    "fas fa-th",
    App_001
  )
];

// =================================================================================
// === Strings :
// =================================================================================
export const _APP_STRINGS = {
  TopNav: {
    Title: {
      en: "Navbar",
      fr: "Titre"
    }
  },
  SideNav: {
    List_Header: {
      en: "Main Navigation",
      fr: "Navigation Principale"
    },
    Apps_Header: {
      en: "Application Showcase",
      fr: "Vitrine d'Application"
    }
  }
};
