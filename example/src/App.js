import React, { Component } from "react";
import { Button, ExampleComponent } from "simple-spa-lib";

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
