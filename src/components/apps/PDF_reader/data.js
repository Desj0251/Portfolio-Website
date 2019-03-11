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

// =================================================================================
// === Custom Classes :
// =================================================================================
class _PDF_NavList {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

// =================================================================================
// === Constants :
// =================================================================================
export const _PDF_NAV_LIST = [
    new _PDF_NavList(   'PDF_001', 
                        'Read', 
                        null ),
    new _PDF_NavList(   'PDF_002', 
                        'Create', 
                        null ),
    new _PDF_NavList(   'PDF_003', 
                        'Export', 
                        null ),
    new _PDF_NavList(   'PDF_004', 
                        'About', 
                        null )
];

// =================================================================================
// === Strings :
// =================================================================================
export const _PDF_READER_STRINGS = {
    media : {
        title : 'Portable Document Format',
        body : 'The Portable Document Format (PDF) is a file format developed by Adobe in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems.'
    }
}