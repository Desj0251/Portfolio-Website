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
import './PDF_reader.css';
import PDF_icon from './assets/PDF-icon-gray.png'
import { _PDF_NAV_LIST, _PDF_READER_STRINGS } from './data';

// =================================================================================
// === Home.Component :
// =================================================================================
export default class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            TopNav : {
                isActive: _PDF_NAV_LIST[0].id
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
                <PDFReaderNavMedia />
                <PDFReaderNav
                    _isActive = { this.state.TopNav.isActive }
                    _toggle = { this.toggleActive.bind(this) }
                />
                <div className="bunch-o-content" />
            </div>
        );
    }
}

// =================================================================================
// === PDF_reader.Component.PDFReaderNavMedia :
// =================================================================================
function PDFReaderNavMedia(props) {
    return (
        <div className="PDF_reader_nav-media d-flex w-100">
            <div class="media">
                <img src={PDF_icon} class="mr-3 media-image align-self-center" alt="..."/>
                <div class="media-body">
                    <p class="mt-0">{_PDF_READER_STRINGS.media.title}</p>
                    <small class="font-weight-lighter">{_PDF_READER_STRINGS.media.body}</small>
                </div>
            </div>

        </div>  
    );
}

// =================================================================================
// === PDF_reader.Component.PDFReaderNav :
// =================================================================================
function PDFReaderNav(props) {
    return ( 
        <ul className="nav sticky-top Home_header-nav">
            {_render_NavItems(_PDF_NAV_LIST, props._isActive, props._toggle)}
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