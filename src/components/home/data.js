// =================================================================================
// ==   File    : Home.data.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================

// =================================================================================
// === Custom Classes :
// =================================================================================
class _Home_NavList {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

class _Home_NavSocial {
    constructor(id, icon, desc, url) {
        this.id = id;
        this.icon = icon;
        this.desc = desc;
        this.url = url;
    }
}

// =================================================================================
// === Constants :
// =================================================================================
export const _HOME_NAV_LIST = [
    new _Home_NavList(  'HOME_001', 
                        'Home', 
                        null ),
    new _Home_NavList(  'HOME_002', 
                        'Videos', 
                        null ),
    new _Home_NavList(  'HOME_003', 
                        'Playlists', 
                        null ),
    new _Home_NavList(  'HOME_004', 
                        'Channels', 
                        null ),
    new _Home_NavList(  'HOME_005', 
                        'About', 
                        null ) 
];

export const _HOME_NAV_SOCIAL = [ 
    new _Home_NavSocial(    'SOCIAL_001',  
                            'fab fa-facebook',      
                            'Facebook',         
                            'http://www.facebook.com/john.desjardins1' ),
    new _Home_NavSocial(    'SOCIAL_002',  
                            'fab fa-instagram',     
                            'Instagram',        
                            'http://www.instagram.com/john_and_bert/' ),
    new _Home_NavSocial(    'SOCIAL_003',  
                            'fab fa-twitter',       
                            'Twitter',          
                            'https://twitter.com/Kenata88' ),
    new _Home_NavSocial(    'SOCIAL_004',  
                            'fab fa-youtube',       
                            'Youtube',          
                            'https://www.youtube.com/channel/UCJsLplOKMfFn0116XPXpI1g' )
];

// =================================================================================
// === Strings :
// =================================================================================
export const _HOME_STRINGS = {
    media : {
        name : 'John Desjardins',
        title : '-Mobile Developer'
    }
}