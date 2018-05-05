/**
 * @class ExampleComponent
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import {*} from "./components/Button";

import styles from "./styles.css";

export class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}

export class Button extends Button;