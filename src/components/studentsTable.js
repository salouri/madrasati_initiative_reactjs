import React, { Component } from 'react';
import { Card, Container, Table } from 'react-bootstrap';

class StudentsTable extends Component {
  DATA;

  renderTableData() {
    if (this.props.students.length === 0)
      return (
        <tr>
          <td align='center' colSpan='6'>
            No students available
          </td>
        </tr>
      );

    return this.props.students.map((student) => {
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
      <Container>
        <Card className='studentsTableContainer'>
          <Card.Body>
            <Table
              responsive='sm'
              stripped='true'
              bordered
              hover
              size='sm'
              className='studentsTable'
            >
              <thead>
                <tr>
                  <th>{'First Name'}</th>
                  <th>{'Last Name'}</th>
                  <th>{'Date of Birth'}</th>
                  <th>{'Nationality'}</th>
                  <th>{'Last Year GPA'}</th>
                  <th>{'Current Year GPA'}</th>
                </tr>
                {this.renderTableData()}
              </thead>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default StudentsTable;
