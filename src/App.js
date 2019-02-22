import React, { Component } from "react";
import { connect } from "react-redux";

import { basic } from "./actions/index";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.basic("max");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            You got redux, & hot reloading. Hello {this.props.helloWorld}
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  helloWorld: state.basic.hello
});
const mapDispatchToProps = dispatch => ({
  basic: greeting => dispatch(basic(greeting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
