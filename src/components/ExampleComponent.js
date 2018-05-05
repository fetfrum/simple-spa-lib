// import React, { Component } from "react";
// import ExampleComponent from "../../../dist/index.es";

// class ExampleComponent extends Component {
//   render() {
//     return <div />;
//   }
// }

// export default ExampleComponent;

/**
 * @class ExampleComponent
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}
