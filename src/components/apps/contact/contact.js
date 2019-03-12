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
import './contact.css';
import CONTACT_icon from './assets/Checklist-Grey.png'
import { _CONTACT_NAV_LIST, _CONTACT_READER_STRINGS } from './data';

const FEMALE = 'female';
const MALE = 'male';

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
                error : null
            }
        }
    }

    // =============================
    // === Lifecycle Events :
    // =============================
    componentDidMount = (props) => {
        fetchTopFive( 1, FEMALE, this._changeState );
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
    if (Content) { return ( <Content 
                                _props = { props._props }
                            /> ); }
    else { return <div className="bunch-o-content" /> }
}

// =================================================================================
// === PDF_reader.Component.PDFReaderNavMedia :
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
// === PDF_reader.Component.PDFReaderNav :
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
// === Contact.Component.Home :
// =================================================================================
export function Home(props) {
    return (
        <div>
            <div className="w-100 home-recommend">
                { props._props.isLoading && <RecommendLoading /> }
                { (!props._props.isLoading && props._props.user && !props._props.error) && 
                    <RecommendUser
                        _user= { props._props.user }
                    /> 
                }
                { props._props.error &&
                    <div className="w-100">
                        <Error 
                            _error= { props._props.error }
                        />
                    </div>
                }
            </div>
            <div className = "bunch-o-content" />
        </div>
    );
}
function Error(props) {
    return (
        <div className="row align-items-center w-100 m-0">
            <div className="col container error-box">
                <div className="alert alert-dark m-0" role="alert">
                    <h4 className="alert-heading">{_CONTACT_READER_STRINGS.error.title}</h4>
                    <p>{_CONTACT_READER_STRINGS.error.body}</p>
                    <hr className="mb-3" />
                    <p className="mb-0"> <strong>{_CONTACT_READER_STRINGS.error.messageLabel}</strong> { props._error.message }</p>
                </div>
            </div>
        </div>
    );
}

function RecommendUser(props) {
    let user = props._user.results;
    return (
        <div className="spinner">
            
        </div>
    );
}

function RecommendLoading(props) {
    return (
        <div className="spinner row align-items-center w-100 m-0">
            <div className="col text-center">
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
            </div>
        </div>
    );
}

function Spinner(props) {
    return (
        <div className="spinner-grow text-light mx-1" role="status">
            <span className="sr-only">Loading...</span>
        </div> );
}


// =================================================================================
// === Miscelaneous :
// =================================================================================
async function fetchTopFive(results, gender, callback) {
    const URL = `https://randomuser.me/api/?results=${results}&gender=${gender}&nat=ca`;
    try {
      const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }));
      const response = await fetchResult;
      if (response.ok) {
        const jsonData = await response.json();
        // console.log(JSON.stringify(jsonData));
        callback({ RandomUser : { isLoading : false, user : jsonData, error : null } });
      } else {
        // console.log(`Response.status: ${response.status}`);
      }
    } catch (e) {
        callback({ RandomUser : { isLoading : false, user : {}, error : e } });
    }
}