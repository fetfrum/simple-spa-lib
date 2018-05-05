import React, { Component } from "react";

import ExampleComponent from "simple-spa-lib";
import HelloWorld from "simple-spa-lib";
import Button from "simple-spa-lib";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button />
      </div>
    );
  }
}
