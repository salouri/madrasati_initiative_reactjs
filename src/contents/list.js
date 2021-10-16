import React, { Component } from 'react';
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
        <h2 className='subtopic'>{'List all registered students:'}</h2>
        <StudentsTable students={this.state.students} />
        <br />
        <br />
        <Social />
      </div>
    );
  }
}
export default List;
