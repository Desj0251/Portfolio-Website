// =================================================================================
// ==   File    : contact.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from 'react';
import './randomuser.css';
import CONTACT_icon from './assets/Checklist-Grey.png'
import { _CONTACT_NAV_LIST, _CONTACT_READER_STRINGS } from './data';

// const FEMALE    = 'female';
// const MALE      = 'male';
const BOTH      = 'both'

// =================================================================================
// === Home.Component :
// =================================================================================
export default class Contacts extends Component { 
    
    // =============================
    // === Constructor :
    // =============================
    constructor(props) {
        super(props);
        this.state = {
            TopNav : { isActive: _CONTACT_NAV_LIST[0].id },
            RandomUser : {
                isLoading : true,
                user : null,
                error : null,
                isActive : null
            }
        }
    }

    // =============================
    // === Lifecycle Events :
    // =============================
    componentDidMount = (props) => {
        fetchUsers( 50, BOTH, this._changeState );
    }

    // =============================
    // === Callback Methods :
    // =============================
    toggleActive = (_newProps) => {
        this.setState({
            TopNav : { isActive: _newProps }
        });
    }
    _changeState = ( props ) => {
        this.setState(props);
    }
    _changeActiveContact = (props) => {
        const that = this;
        return function(e) {
            that.setState({
                RandomUser : {
                    isLoading : that.state.RandomUser.isLoading,
                    user : that.state.RandomUser.user,
                    error : that.state.RandomUser.error,
                    isActive : props
                }
            });
        }
    }

    // =============================
    // === Render :
    // =============================
    render() {
        return (
            <div className="PDF_reader w-100">
                <div className="PDF_reader_header-image" />
                <ContactNavMedia />
                <ContactNav
                    _isActive = { this.state.TopNav.isActive }
                    _toggle = { this.toggleActive.bind(this) }
                />
                <ContactContent 
                    _content = { this.state.TopNav.isActive }
                    _props = { this.state.RandomUser }
                    _callback = { this._changeActiveContact }
                />
            </div>
        );
    }
}

// =================================================================================
// === Contact.Component.ContactContent :
// =================================================================================
function ContactContent(props) {
    let Content = null;
    for ( let i = 0; i < _CONTACT_NAV_LIST.length; i++ ) {
        if ( _CONTACT_NAV_LIST[i].id === props._content ) { Content = _CONTACT_NAV_LIST[i].content }
    }
    if (Content) { return ( <Content _props = { props._props } _callback = { props._callback } /> ); }
    else { return ( <div className="bunch-o-content" /> ) }
}

// =================================================================================
// === PDF_reader.Component.ContactNavMedia :
// =================================================================================
function ContactNavMedia(props) {
    return (
        <div className="PDF_reader_nav-media d-flex w-100">
            <div className="media">
                <img src={CONTACT_icon} className="mr-3 media-image align-self-center" alt="PDF icon"/>
                <div className="media-body">
                    <p className="mt-0"><b>{_CONTACT_READER_STRINGS.media.title}</b></p>
                    <small className="font-weight-lighter muted">{_CONTACT_READER_STRINGS.media.body}</small>
                </div>
            </div>
        </div>  
    );
}

// =================================================================================
// === Contact.Component.ContactNav :
// =================================================================================
function ContactNav(props) {
    return ( 
        <ul className="nav sticky-top Home_header-nav">
            {_render_NavItems(_CONTACT_NAV_LIST, props._isActive, props._toggle)}
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
            <div className={"h-100 Home_topnav-item " + isActive(props._active)}>
                <span className="nav-link">{props._title}</span>
            </div>
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
        toggle(id);
    }
}

// =================================================================================
// === Miscelaneous :
// =================================================================================
async function fetchUsers(results, gender, callback) {
    const URL = `https://randomuser.me/api/?results=${results}&gender=${gender}&nat=ca`;
    try {
      const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
      const response = await fetchResult;
      if (response.ok) {
        const jsonData = await response.json();
        // console.log(JSON.stringify(jsonData));
        let data = jsonData.results.sort(nestedSort("login", "username"));
        callback({ RandomUser : { isLoading : false, user : data, error : null, isActive: 0 } });
      } else {
        // console.log(`Response.status: ${response.status}`);
      }
    } catch (e) {
        callback({ RandomUser : { isLoading : false, user : {}, error : e, isActive: null } });
    }
}

let nestedSort = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
    const a = prop2 ? e1[prop1][prop2] : e1[prop1],
        b = prop2 ? e2[prop1][prop2] : e2[prop1],
        sortOrder = direction === "asc" ? 1 : -1
    return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
}