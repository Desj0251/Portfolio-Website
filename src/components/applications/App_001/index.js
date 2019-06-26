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

export default class App extends Component {
  // --- Constructor :
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="Application App-001">
      <table class="table table-sm table-bordered text-light">
        <thead className="text-center">
          <tr className="title">
            <th colSpan="4"><b>Unformatted Applicant Data</b></th>
          </tr>
          <tr className="headers">
            <th scope="col">Rev</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
      <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>;
  }
}
