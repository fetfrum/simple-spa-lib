import React, { Component } from "react";
import { Button, Section } from "simple-spa-lib";

export default class App extends Component {
  render() {
    return (
      <div>
        <Section test fullScreen>
          Section
        </Section>
        <Button />
      </div>
    );
  }
}
