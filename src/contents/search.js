import React, { Component } from 'react';
import Social from '../components/social';
import StudentsTable from '../components/studentsTable';
import { Button, Form, Card, Container } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
    this.eventCurrentField = this.eventCurrentField.bind(this);

    this.state = {
      fullName: { first: '', last: '' },
      students: JSON.parse(localStorage.getItem('Students')) || [],
      foundStudents: [],
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    const students = JSON.parse(localStorage.getItem('Students')) || [];
    const fullName = { ...this.state.fullName };
    const foundStudents = students.filter(
      (student) =>
        student.firstName.toLowerCase().trim() ===
          fullName.first.toLowerCase().trim() &&
        student.lastName.toLowerCase().trim() === fullName.last.toLowerCase().trim()
    );
    console.log('foundStudents', foundStudents);
    this.setState({ foundStudents: foundStudents || [] });
  }

  // Event handlers
  eventCurrentField(field, event) {
    const tempFull = { ...this.state.fullName };
    tempFull[field] = event.target.value;
    this.setState({ fullName: tempFull });
  }

  render() {
    return (
      <Container>
        <div className='condiv'>
          <h2>{'Search for a student:'}</h2>
          <Card style={{ width: '65%', display: 'inline-block' }}>
            <Card.Body style={{ width: '55%', display: 'inline-block' }}>
              <Form onSubmit={this.onFormSubmit.bind(this)} id='search-student-form'>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='firstName'>
                    <strong>First Name</strong>
                  </Form.Label>
                  <Form.Control
                    id='firstName'
                    type='text'
                    required={true}
                    value={this.state.fullName.first}
                    onChange={this.eventCurrentField.bind(this, 'first')}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label htmlFor='lastName'>
                    <strong>Last Name</strong>
                  </Form.Label>
                  <Form.Control
                    id='lastName'
                    type='text'
                    required={true}
                    value={this.state.fullName.last}
                    onChange={this.eventCurrentField.bind(this, 'last')}
                  />
                </Form.Group>

                <Button type='submit' className='btn btn-primary btn-block mb-5'>
                  Search
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <StudentsTable
            students={this.state.foundStudents}
            title='Found Students (if any):'
          />
          <br /> <br />
          <Social />
        </div>
      </Container>
    );
  }
}

export default Search;
