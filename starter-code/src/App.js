import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foods from './Foods';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Foods/>
      </div>
    );
  }
}

export default App;
