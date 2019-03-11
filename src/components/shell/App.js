// =================================================================================
// ==   File    : App.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from 'react';
import './App.css';
import { _SIDE_NAV_LIST, _SIDE_NAV_APPS, _TOP_NAV_LIST, _APP_STRINGS } from './data';

// =================================================================================
// === App.Component :
// =================================================================================
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      SideNav : {
        isDrawerOpen: true,
        isActive: _SIDE_NAV_LIST[0].id
      },
      Modal : {
        isActive: false,
        content : null
      }
    }
  }

  toggleModal = ( _content ) => {
    this.setState({
      Modal : {
        isActive: !this.state.Modal.isActive,
        content : _content
      }
    })
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
        { this.state.Modal.isActive &&
          <Modal
            _toggle={this.toggleModal.bind()}
            _content={this.state.Modal.content}
          />
        }
        <TopNav 
          _title={_APP_STRINGS.TopNav.Title}
          _toggle={this.toggleDrawer.bind()}
          _modal={this.toggleModal.bind()}
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
// === App.Component.Modal :
// =================================================================================
function Modal(props) {
  
  return (
    <div className="App_Modal">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header text-light">
            <span className="navbar-brand">
              <i className={props._content.icon + " mr-3"}/>
              {props._content.title}
            </span>
            <TopNavButton 
              _icon="fas fa-times"
              _onClick={props._toggle}
            />
          </div>
          <div className="modal-body text-light">
            { props._content.content }
          </div>
        </div>
      </div>
    </div> 
  );
}

// =================================================================================
// === App.Component.SideNav :
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
// === App.Component.MainContent :
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
// === App.Component.TopNav :
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
            { _renderTopNavItems( _TOP_NAV_LIST, props._modal ) }
          </li>
        </ul>
      </div>

    </nav>
  );
}

function _renderTopNavItems( list, func ) {
  let nav_items = list.map((item, index) => 
    <TopNavButton
      key = { index }
      _icon = { item.icon }
      _onClick = { handleOnClick( func, item.content, item.title, item.icon ) }
      _extra = { 'ml-2' }
    />
  );
  return nav_items;
}

function TopNavButton(props) {
  return (
    <button className={"btn btn-outline-light " + props._extra} type="button" onClick={props._onClick}>
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
function handleOnClick(props, Content, _title, _icon) { 
  return function(e) {
    props( { content: Content, title: _title, icon: _icon } );
  }
}