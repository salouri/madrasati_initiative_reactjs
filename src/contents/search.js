import React, { Component } from 'react';
import Social from '../components/social';
import StudentsTable from '../components/studentsTable';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';

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
      <div className='condiv'>
        <h2 className='subtopic'>{'Search for a student:'}</h2>

        <Card style={{ width: '45%', display: 'inline-block' }}>
          <Card.Body>
            <Container>
              <Form onSubmit={this.onFormSubmit.bind(this)} id='search-student-form'>
                <Form.Group className='mb-3'>
                  <Row>
                    <Col>
                      <Form.Label htmlFor='firstName'>
                        <strong>First Name</strong>
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        id='firstName'
                        type='text'
                        required={true}
                        value={this.state.fullName.first}
                        onChange={this.eventCurrentField.bind(this, 'first')}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Row>
                    <Col>
                      <Form.Label htmlFor='lastName'>
                        <strong>Last Name</strong>
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        id='lastName'
                        type='text'
                        required={true}
                        value={this.state.fullName.last}
                        onChange={this.eventCurrentField.bind(this, 'last')}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Row>
                  <Col>
                    <Button type='submit' className='btn btn-primary btn-block mb-5'>
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Card.Body>
        </Card>
        <StudentsTable
          students={this.state.foundStudents}
          title='Found Students (if any):'
        />
        <br />
        <br />
        <Social />
      </div>
    );
  }
}

export default Search;
