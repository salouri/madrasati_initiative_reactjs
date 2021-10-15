import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className='table'>
          <ul id='horizontal-list'>
            <li id='Register'>
              <NavLink to='/' exact activeClassName='active'>
                Register
              </NavLink>
            </li>
            <li id='Search'>
              <NavLink to='/search' activeClassName='active'>
                Search
              </NavLink>
            </li>
            <li id='List'>
              <NavLink to='/list' activeClassName='active'>
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
