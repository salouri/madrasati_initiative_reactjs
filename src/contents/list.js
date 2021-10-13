import React, { Component } from 'react';
// import Widecard from '../components/widecard';
import Social from '../components/social';
import StudentsTable from '../components/studentsTable';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: JSON.parse(localStorage.getItem('Students')) || [],
    };
  }

  render() {
    return (
      <div className='condiv'>
        <StudentsTable students={this.state.students} title='List All Students' />
        <br />
        <Social />
      </div>
    );
  }
}
export default List;
