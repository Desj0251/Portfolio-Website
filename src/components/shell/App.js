// =================================================================================
// ==   File    : App.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports
// =================================================================================
import React, { Component } from 'react';
import './App.css';
import { _SIDE_NAV_LIST, _SIDE_NAV_APPS, _APP_STRINGS } from './data';

// =================================================================================
// === App.Component
// =================================================================================
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      SideNav : {
        isDrawerOpen: true,
        isActive: 'NAV_001' 
      } 
    }
  }

  toggleDrawer = () => {
    this.setState({ 
        SideNav : { 
          isDrawerOpen: !this.state.SideNav.isDrawerOpen,
          isActive: this.state.SideNav.isActive 
        }
    });
  }
  
  toggleActive = (_newProps) => {
    this.setState({
        SideNav : {
          isDrawerOpen: this.state.SideNav.isDrawerOpen,
          isActive: _newProps 
        }
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav 
          _title={_APP_STRINGS.TopNav.Title}
          _toggle={this.toggleDrawer.bind()}
        />

        <div className="d-flex bd-highlight App_ContentArea App_content-height">
          { this.state.SideNav.isDrawerOpen && 
            <SideNav 
              _isActive={this.state.SideNav.isActive}
              _toggle={this.toggleActive.bind()}
            /> 
          }
          <MainContent 
            _content={this.state.SideNav.isActive}
          />
        </div>
      </div> 
    );}
}

// =================================================================================
// === App.Component.SideNav
// =================================================================================
function SideNav(props) {
  return <div className="App_SideNav">
    <ul className="nav flex-column text-light pt-3">
      { _renderSideNavItems(_SIDE_NAV_LIST, props._isActive, props._toggle) }
      <hr className="w-100 my-3"/>
      { _renderSideNavItems(_SIDE_NAV_APPS, props._isActive, props._toggle) }
    </ul>
  </div>
}
function SideNavItem(props) {
  return ( 
    <li className={'nav-item App_SideNav_nav-item ' + isActive(props._isActive)} onClick={_handleNavItemOnClick(props._id, props._toggle)}>
      <div className="container h-100">
        <div className="row h-100">
          <h5 className="col-3 text-center my-auto icon">
            <span className={isActive(props._isActive)}>
              <i className={ props._icon } />
            </span>
          </h5>
          <p className="col-9 my-auto text-truncate">
            <small>{ props._title }</small>
          </p> 
        </div>
      </div>
    </li> 
  );
}
function _renderSideNavItems(list, state, toggle) {
  let NavItems = list.map((item, index) =>
    <SideNavItem 
      key={index}
      _title={item.title}
      _icon={item.icon}
      _id={item.id}
      _isActive={isActiveItem(item.id, state)}
      _toggle={toggle}
    /> 
  );
  return NavItems;
}

function isActive(_isActive) {
  switch (_isActive) {
    case true : {
      return 'active'
    }
    default : {
      return '';
    }
  }
}
function _handleNavItemOnClick(id, toggle) { return function(e) { toggle(id); } }
function isActiveItem(current_id, active_id) { return ( current_id === active_id ); }

// =================================================================================
// === App.Component.MainContent
// =================================================================================
function MainContent(props) {
  return (
    <div className="text-light flex-grow-1 overflow_scroll">
      <div className="wrapper App_content-wrapper">
        <div className="App_content">
          {_renderContent(props._content)}
        </div>
      </div>
    </div>
  );
}

function _renderContent(active_id) {
  let nav_check = _SIDE_NAV_LIST.concat(_SIDE_NAV_APPS);
  for ( let i = 0; i < nav_check.length; i++ ){
    if ( nav_check[i].id === active_id ) { 
      let Content = nav_check[i].content;
      if (Content) { return ( <Content /> ); }
    }
  }
}

// =================================================================================
// === App.Component.TopNav
// =================================================================================
function TopNav(props) {
  return (
    <nav className="App_TopNav navbar fixed-top text-light d-flex justify-content-between">
      
      <div className="form-inline">
        <TopNavButton
          _icon="fas fa-bars"
          _onClick={props._toggle}
        />
        <span className="navbar-brand mb-0 h1 ml-3">{props._title}</span>
      </div>

      <div className="form-inline flex-grow-1 pl-3 pr-3">
        <TopNavSearch />
      </div>

      <div className="form-inline">
        <ul className="nav">
          <li className="nav-item">
            <TopNavButton
              _icon = "fas fa-user-astronaut"
              _onClick = { handleOnClick.bind(this) }
            />
          </li>
        </ul>
      </div>

    </nav>
  );
}

function TopNavButton(props) {
  return (
    <button className="btn btn-outline-light" type="button" onClick={props._onClick}>
      <i className={props._icon}/>
    </button> 
  );
}
function TopNavSearch(props) {
  return (
    <div className="input-group w-75 container">
      <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-search"/>
      <div className="input-group-append">
        <button className="btn btn-outline-light" type="button" id="button-search">
          <i className="fas fa-search"/>
        </button>
      </div>
    </div> 
  );
}
function handleOnClick() { console.log("Click"); }