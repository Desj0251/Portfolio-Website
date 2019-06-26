// =================================================================================
// ==   File    : App.config.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================

// =================================================================================
// === Custom Classes :
// =================================================================================
class unformattedData_item {
    constructor(rev, updated_date, first_name, last_name, gender) {
       this.rev = rev;
       this.updated_date = updated_date;
       this.first_name = first_name;
       this.last_name = last_name;
       this.gender = gender;
    }
}

// =================================================================================
// === Constants :
// =================================================================================
export const unformattedData = [
    new unformattedData_item(66, '19-03-07', 'TESTX', 'TESTX', 'Citizenship'),
    new unformattedData_item(66, '19-03-07', 'TESTX', 'TESTX', 'Identification Document')
];

// =================================================================================
// === Strings :
// =================================================================================