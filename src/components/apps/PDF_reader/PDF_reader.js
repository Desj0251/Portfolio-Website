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

// =================================================================================
// === Home.Component :
// =================================================================================
export default class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
            <div className="PDF_reader w-100">
                PDF_reader WORKS!
            </div>
        );
    }
}