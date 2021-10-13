import React, { Component } from 'react';

export default class StudentsTable extends Component {
  DATA;

  constructor(props) {
    super(props);
  }

  renderTableData() {
    if (this.props.students.length === 0)
      return (
        <tr>
          <td align='center' colSpan='6'>
            No students available
          </td>
        </tr>
      );

    return this.props.students.map((student, index) => {
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
        <h1 className='subtopic'>{this.props.title}</h1>
        <table className='studentsTable'>
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
      </div>
    );
  }
}
