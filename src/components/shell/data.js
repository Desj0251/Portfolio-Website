import Home from '../home/Home';

class _navitem {
  constructor( id, title, icon, content ) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.content = content;
  }
}

export const _SIDE_NAV_LIST = [
  new _navitem( 'NAV_001', 'Home', 'fas fa-home', Home ),
  new _navitem( 'NAV_002', 'Trending', 'fas fa-fire', null ),
  new _navitem( 'NAV_003', 'Subscription', 'fab fa-youtube', null ) 
];
export const _SIDE_NAV_APPS = [
  new _navitem( 'APP_001', 'List Item 1', 'fas fa-th-list', null ) 
];

export const _APP_STRINGS = {
  TopNav : {
    Title : 'Navbar'
  }
}