// =================================================================================
// === App.Component.SideNavCondensed :
// =================================================================================
import React from "react";
import {
  _SIDE_NAV_LIST,
  _SIDE_NAV_APPS,
  _APP_STRINGS
} from "../../../config/App.config";

export function SideNavCondensed(props) {
  return (
    <div className="App_SideNavCondensed">
      <ul className="nav flex-column text-light">
        {_renderSideNavCondensedItems(
          _SIDE_NAV_LIST,
          props._isActive,
          props._toggle
        )}
        <hr className="w-100 my-2" />
        {_renderSideNavCondensedItems(
          _SIDE_NAV_APPS,
          props._isActive,
          props._toggle
        )}
      </ul>
    </div>
  );
}
function _renderSideNavCondensedItems(list, state, toggle) {
  let NavItems = list.map((item, index) => (
    <SideNavItemCondensed
      key={index}
      _title={item.title}
      _icon={item.icon}
      _id={item.id}
      _isActive={isActiveItem(item.id, state)}
      _toggle={toggle}
    />
  ));
  return NavItems;
}
function SideNavItemCondensed(props) {
  return (
    <li className={"nav-item App_SideNavCondensed_nav-item"}>
      <button
        className={`btn btn-outline-light my-1 sideButton ${isActive(
          props._isActive
        )}`}
        type="button"
        onClick={_handleNavItemOnClick(props._id, props._toggle)}
      >
        <i className={props._icon} />
      </button>
    </li>
  );
}

// =================================================================================
// === App.Component.SideNav :
// =================================================================================
export function SideNav(props) {
  return (
    <div className="App_SideNav">
      <ul className="nav flex-column text-light pt-3">
        <SideNavHeader _title={_APP_STRINGS.SideNav.List_Header} />
        {_renderSideNavItems(_SIDE_NAV_LIST, props._isActive, props._toggle)}
        <hr className="w-100 my-2" />
        <SideNavHeader _title={_APP_STRINGS.SideNav.Apps_Header} />
        {_renderSideNavItems(_SIDE_NAV_APPS, props._isActive, props._toggle)}
      </ul>
    </div>
  );
}

function SideNavHeader(props) {
  return (
    <div className="App_SideNav_header w-100 my-auto">
      <small className="text-truncate">
        <b>{props._title}</b>
      </small>
    </div>
  );
}

function SideNavItem(props) {
  return (
    <li
      className={`nav-item App_SideNav_nav-item ${isActive(props._isActive)}`}
      onClick={_handleNavItemOnClick(props._id, props._toggle)}
    >
      <div className="container h-100">
        <div className="row h-100">
          <h5 className="col-3 text-center my-auto icon">
            <span className={isActive(props._isActive)}>
              <i className={props._icon} />
            </span>
          </h5>
          <p className="col-9 my-auto text-truncate">
            <small>
              <b>{props._title}</b>
            </small>
          </p>
        </div>
      </div>
    </li>
  );
}
function _renderSideNavItems(list, state, toggle) {
  let NavItems = list.map((item, index) => (
    <SideNavItem
      key={index}
      _title={item.title}
      _icon={item.icon}
      _id={item.id}
      _isActive={isActiveItem(item.id, state)}
      _toggle={toggle}
    />
  ));
  return NavItems;
}

function isActive(_isActive) {
  switch (_isActive) {
    case true: {
      return "active";
    }
    default: {
      return "";
    }
  }
}
function _handleNavItemOnClick(id, toggle) {
  return function(e) {
    toggle(id);
  };
}
function isActiveItem(current_id, active_id) {
  return current_id === active_id;
}
