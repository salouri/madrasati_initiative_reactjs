import React, { Component } from 'react';
import Widecard from '../components/widecard';
import Social from '../components/social';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: JSON.parse(localStorage.getItem('Students')) || [],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    if (this.state.students.length === 0)
      return (
        <tr>
          <td align='center' colSpan='6'>
            No students available
          </td>
        </tr>
      );

    return this.state.students.map((student, index) => {
      const { id, firstName, lastName, dob, nationality, previousGPA, currentGPA } =
        student; //destructuring
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{dob}</td>
          <td>{nationality}</td>
          <td>{previousGPA}</td>
          <td>{currentGPA}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>List All Students</h1>
        <table id='students'>
          <tbody>
            <tr>
              <th>{'First Name'}</th>
              <th>{'Last Name'}</th>
              <th>{'Date of Birth'}</th>
              <th>{'Nationality'}</th>
              <th>{'Last Year GPA'}</th>
              <th>{'Current Year GPA'}</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <br />
        <Social />
      </div>
    );
  }
}
export default List;
