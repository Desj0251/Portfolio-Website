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
  constructor(rev, updated_date, first_name, last_name, sup_doc, aud_name) {
    this.rev = rev;
    this.updated_date = updated_date;
    this.first_name = first_name;
    this.last_name = last_name;
    this.sup_doc = sup_doc;
    this.aud_name = aud_name;
  }
}

export class FE_Item {
  constructor(updated_date, type, prev, current, aud_name) {
    this.updated_date = updated_date;
    this.type = type;
    this.prev = prev;
    this.current = current;
    this.aud_name = aud_name;
  }
}

// =================================================================================
// === Constants :
// =================================================================================
export const DATA = [
  new unformattedData_item(53, "19-01-01", "TESTX", "LAST", null, "Cody"),
  new unformattedData_item(
    66,
    "19-03-07",
    "TESTX",
    "LAST",
    "Citizenship",
    "Yi"
  ),
  new unformattedData_item(
    66,
    "19-03-07",
    "TESTX",
    "LAST",
    "Identification Document",
    "Yi"
  ),
  new unformattedData_item(68, "19-03-07", "TESTX", null, null, "Cody"),
  new unformattedData_item(69, "19-03-07", "TESTX", "TESTX", null, "Paul"),
  new unformattedData_item(
    72,
    "19-03-07",
    "TESTX",
    "TESTX",
    "Citizenship",
    "John"
  )
];
export const I = ["first_name", "last_name", "sup_doc"];

// =================================================================================
// === Strings :
// =================================================================================
