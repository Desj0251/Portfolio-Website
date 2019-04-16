import React, { Component } from "react";

const API_KEY = "6f841ec6d407bef9a05c39982551ed48";
const DARKSKY_URL = "https://api.darksky.net/forecast/";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Weather: {
        isLoading: true,
        data: null,
        error: null
      }
    };
  }

  componentDidMount = () => {
    fetchWeather(45, -75, this.callback);
  };

  callback = new_state => {
    this.setState(new_state);
  };

  someMethod = () => {
    console.log(this.state);
    return "Some text";
  };

  render() {
    return (
      <div>
        {this.state.Weather.isLoading && (
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {!this.state.Weather.isLoading && <span>{this.someMethod()}</span>}
      </div>
    );
  }
}

// =================================================================================
// === Miscelaneous :
// =================================================================================
async function fetchWeather(current_latitude, current_longitude, callback) {
  const URL = `https://cors-anywhere.herokuapp.com/${DARKSKY_URL}${API_KEY}/${current_latitude},${current_longitude}`;
  try {
    const fetchResult = fetch(
      new Request(URL, { method: "GET", mode: "cors", cache: "reload" })
    );
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      callback({
        Weather: {
          isLoading: false,
          data: jsonData,
          error: null
        }
      });
    } else {
      // console.log(`Response.status: ${response.status}`);
      callback({
        Weather: { isLoading: false, data: null, error: response.status }
      });
    }
  } catch (e) {
    callback({
      Weather: { isLoading: false, data: null, error: e }
    });
  }
}
