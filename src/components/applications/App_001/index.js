// =================================================================================
// ==   File    : index.js
// ==   Author  : John Desjardins | John.Desjardins@tc.gc.ca
// ==   Version : 0.0.1
// ==   Date    : June 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React, { Component } from "react";

import "./index.css";

import { DATA } from "./config/index.config";
import { clean_data, convert_data } from "./config/data.service";

import DataTable from "./components/table";

export default class App extends Component {
  render() {
    return (
      <div className="Application App-001 table-responsive">
        <DataTable _title={"Unclean Data"} _data={DATA} />
        <DataTable _title={"Clean Data"} _data={clean_data(DATA)} />
        <DataTable
          _title={"Converted Data"}
          _data={convert_data(clean_data(DATA))}
        />
      </div>
    );
  }
}
