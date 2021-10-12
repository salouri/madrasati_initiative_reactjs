import React, { Component } from 'react';
import Navitem from './navItem';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNavItem: 'Register',
    };
  }

  activateItem = (id) => {
    // remove 'active' class from all "Navitem" DOM elements
    if (this.state.activeNavItem.length > 0) {
      document
        .querySelector(`#${this.state.activeNavItem}`)
        .classList.remove('active');
    }

    // add 'active' class to the id stored in the 'activeNavItem' state above
    this.setState({ activeNavItem: id }, () => {
      document.querySelector(`#${this.state.activeNavItem}`).classList.add('active');
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <Navitem
            item='Register'
            tolink='/'
            activeFunc={this.activateItem}
          ></Navitem>

          <Navitem
            item='Search'
            tolink='/search'
            activeFunc={this.activateItem}
          ></Navitem>

          <Navitem
            item='List'
            tolink='/list'
            activeFunc={this.activateItem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
