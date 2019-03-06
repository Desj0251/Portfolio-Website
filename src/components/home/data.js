class _Home_NavList
{
    constructor(id, title, content)
    {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
export const _HOME_NAV_LIST = [
    new _Home_NavList( 'HOME_001', 'Home', null ),
    new _Home_NavList( 'HOME_002', 'Videos', null),
    new _Home_NavList( 'HOME_003', 'Playlists', null),
    new _Home_NavList( 'HOME_004', 'Channels', null),
    new _Home_NavList( 'HOME_005', 'About', null) ];

class _Home_NavSocial
{
    constructor(id, icon, desc, url)
    {
        this.id = id;
        this.icon = icon;
        this.desc = desc;
        this.url = url;
    }
}
export const _HOME_NAV_SOCIAL = [ 
    new _Home_NavSocial( 'SOCIAL_001', 'fab fa-facebook', 'Facebook', 'http://www.facebook.com' ),
    new _Home_NavSocial( 'SOCIAL_002', 'fab fa-instagram', 'Instagram', 'http://www.facebook.com' ),
    new _Home_NavSocial( 'SOCIAL_003', 'fab fa-twitter', 'Twitter', 'http://www.facebook.com' ),
    new _Home_NavSocial( 'SOCIAL_004', 'fab fa-youtube', 'Youtube', 'http://www.facebook.com' )
];

export const _HOME_STRINGS = {
    media : {
        name : 'John Desjardins',
        title : '-Mobile Developer'
    }
}