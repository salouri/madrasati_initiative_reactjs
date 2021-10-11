import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Navitem item='Register' tolink='/'></Navitem>
          <Navitem item='Search' tolink='/search'></Navitem>
          <Navitem item='List' tolink='/list'></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
