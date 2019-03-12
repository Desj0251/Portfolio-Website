// 1552306874

// =================================================================================
// ==   File    : PDF_reader.data.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import { Home } from './contact';

// =================================================================================
// === Custom Classes :
// =================================================================================
class _Contact_NavList {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

// =================================================================================
// === Constants :
// =================================================================================
export const _CONTACT_NAV_LIST = [
    new _Contact_NavList(       'CHK_001', 
                                'Home', 
                                Home ),
    new _Contact_NavList(       'CHK_002', 
                                'Export', 
                                null ),
    new _Contact_NavList(       'CHK_003', 
                                'About', 
                                null )
];

// =================================================================================
// === Strings :
// =================================================================================
export const _CONTACT_READER_STRINGS = {
    media : {
        title : 'Contact List',
        body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus euismod ex, ' 
        + 'vel posuere est tincidunt et. Cras gravida velit eget rhoncus iaculis. Cras elit mi, porta id ultrices ' 
        + 'pretium, tristique id neque. Ut id semper tellus, vitae molestie erat. Vestibulum venenatis aliquet nulla ' 
        + 'at aliquet. Pellentesque viverra, tellus non ullamcorper iaculis, arcu arcu ultricies ligula, tempus ' 
        + 'luctus mauris nisl eu tellus. Pellentesque id maximus augue. Donec eros magna, mattis eget vestibulum at, ' 
        + 'imperdiet dictum neque. Etiam tortor arcu, faucibus ac porta a, vehicula vitae urna. '
        + 'Vivamus ac convallis ante, sit amet volutpat tortor.'
    },
    error : {
        title : 'API Request Failed!',
        body : "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so "
        + "that you can see how spacing within an alert works with this kind of content.",
        messageLabel : 'Error Message :'
    }
}