import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navitem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        <Link
          to={this.props.tolink}
          onClick={this.props.activeFunc.bind(this, this.props.item)} // bind the 'item' prop to the function's this
        >
          {this.props.item}
        </Link>
      </li>
    );
  }
}

export default Navitem;
