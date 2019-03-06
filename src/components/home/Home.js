// =================================================================================
// ==   File    : Home.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports
// =================================================================================
import React, { Component } from 'react';
import './Home.css';
import Home_Avatar from './assets/Home_Avatar.jpg'
import { _HOME_NAV_LIST, _HOME_NAV_SOCIAL, _HOME_STRINGS } from './data';

// =================================================================================
// === Home.Component
// =================================================================================
export default class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            TopNav : {
                isActive: 'HOME_001' 
            } 
        }
    }

    toggleActive = (_newProps) => {
        this.setState({
            TopNav : { 
                isActive: _newProps 
            }
        });
    }

    render() {
        return (
            <div className="Home w-100">
                
                <div className="Home_header-image" />
                <HomeNavMedia
                
                />
                <HomeNav 
                    _isActive = { this.state.TopNav.isActive }
                    _toggle = { this.toggleActive.bind(this) }
                />
                <div className="bunch-o-content"/>
            </div>
        );
    }
}

// =================================================================================
// === Home.Component.HomeNavMedia
// =================================================================================
function HomeNavMedia(props) {
    return (
        <div className="Home_nav-media d-flex justify-content-between">
            <div className="media h-100 w-50">
                <img src={Home_Avatar} class="mr-3 h-75 avatar my-auto" alt="Home Avatar" />
                <div className="media-body my-auto">
                    <p class="mb-0">{_HOME_STRINGS.media.name}</p>
                    <small className="muted font-italic font-weight-lighter">{_HOME_STRINGS.media.title}</small>
                </div>
            </div>
            <div className="text-right my-auto">
                { _render_social(_HOME_NAV_SOCIAL) }
            </div>
        </div>
    );
}
function SocialButton(props) {
    return (
        <button className="btn btn-outline-light ml-2" type="button" onClick={props._onClick}>
            <i className={props._icon}/>
        </button> 
    );
}
function _render_social(props) {
    let SocialItems = props.map((item, index) => 
        <SocialButton 
            _icon       = {item.icon}
            _onClick    = { function(e) {} }
            _tooltip    = { item.desc }
        />
    );
    return SocialItems;
}

// =================================================================================
// === Home.Component.HomeNav
// =================================================================================
function HomeNav(props) {
    return ( 
        <ul className="nav sticky-top Home_header-nav">
            {_render_NavItems(_HOME_NAV_LIST, props._isActive, props._toggle)}
        </ul>
    );
}
function _render_NavItems(props, active_id, toggle) {
    let NavItems = props.map((item, index) =>
        <HomeNavItem
            key = {index}
            _id = {item.id}
            _title = {item.title}
            _active = {_isActive(item.id, active_id)}
            _toggle = { toggle }
        />
    );
    return NavItems;
}
function _isActive( item_id, active_id ) {
    if ( item_id === active_id ) { return true }
    return false;
}
function HomeNavItem(props) {
    return ( 
        <li className="nav-item" onClick={ _handleNavItemOnClick( props._id, props._toggle ) }>
            <div className={"h-100 Home_topnav-item " + isActive(props._active)}><span className="nav-link">{props._title}</span></div>
        </li> 
    );
}
function isActive(isActive) {
    switch(isActive) {
        case true : {
            return "active"
        }
        default : {
            return false;
        }
    }
}
function _handleNavItemOnClick(id, toggle) {
    return function(e) {
        console.log('click')
        toggle(id);
    }
}