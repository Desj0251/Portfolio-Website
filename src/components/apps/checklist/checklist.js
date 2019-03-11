// =================================================================================
// ==   File    : Home.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from 'react';
import './checklist.css';
import CHECK_icon from './assets/Checklist-Grey.png'
import { _CHECK_NAV_LIST, _CHECK_READER_STRINGS } from './data';

// =================================================================================
// === Home.Component :
// =================================================================================
export default class Checklist extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            TopNav : {
                isActive: _CHECK_NAV_LIST[0].id
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
            <div className="PDF_reader w-100">
                <div className="PDF_reader_header-image" />
                <ChecklistNavMedia />
                <ChecklistNav
                    _isActive = { this.state.TopNav.isActive }
                    _toggle = { this.toggleActive.bind(this) }
                />
                <ChecklistContent 
                    _content = { this.state.TopNav.isActive }
                    _props = { 'Some state from Checklist.class is sent to Home.component' }
                />
            </div>
        );
    }
}

// =================================================================================
// === Checklist.Component.ChecklistContent :
// =================================================================================
function ChecklistContent(props) {
    let Content = null;
    for ( let i = 0; i < _CHECK_NAV_LIST.length; i++ ) {
        if ( _CHECK_NAV_LIST[i].id === props._content ) { Content = _CHECK_NAV_LIST[i].content }
    }
    if (Content) { return ( <Content 
                                _props = { props._props }
                            /> ); }
    else { return <div className="bunch-o-content" /> }
}

// =================================================================================
// === PDF_reader.Component.PDFReaderNavMedia :
// =================================================================================
function ChecklistNavMedia(props) {
    return (
        <div className="PDF_reader_nav-media d-flex w-100">
            <div className="media">
                <img src={CHECK_icon} className="mr-3 media-image align-self-center" alt="PDF icon"/>
                <div className="media-body">
                    <p className="mt-0"><b>{_CHECK_READER_STRINGS.media.title}</b></p>
                    <small className="font-weight-lighter muted">{_CHECK_READER_STRINGS.media.body}</small>
                </div>
            </div>
        </div>  
    );
}

// =================================================================================
// === PDF_reader.Component.PDFReaderNav :
// =================================================================================
function ChecklistNav(props) {
    return ( 
        <ul className="nav sticky-top Home_header-nav">
            {_render_NavItems(_CHECK_NAV_LIST, props._isActive, props._toggle)}
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
        console.log('click')
        toggle(id);
    }
}

// =================================================================================
// === Checklist.Component.Home :
// =================================================================================
export function Home(props) {
    return (
        <div className="PDF_view w-100 bunch-o-content">
            {props._props}
        </div>
    );
}