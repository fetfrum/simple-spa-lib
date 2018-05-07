import React, { Component } from "react";
import { Button, Section } from "simple-spa-lib";

export default class App extends Component {
  static propTypes = {
    text: PropTypes.string
  };
  render() {
    return (
      <div>
        <Section test>Section</Section>
        <Button />
      </div>
    );
  }
}
