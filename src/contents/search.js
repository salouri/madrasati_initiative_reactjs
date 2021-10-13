import React, { Component } from 'react';
import Social from '../components/social';
import StudentsTable from '../components/studentsTable';

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
        <br />
        <h2>{'Search for a student:'}</h2>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.onFormSubmit.bind(this)} id='search-student-form'>
              <div className='form-group mb-3 leftHlaf'>
                <label htmlFor='firstName'>
                  <strong>First Name</strong>
                </label>
                <span>
                  <input
                    id='firstName'
                    type='text'
                    required={true}
                    className='form-control'
                    value={this.state.fullName.first}
                    onChange={this.eventCurrentField.bind(this, 'first')}
                  />
                </span>
              </div>
              <div className='form-group mb-3 rightHalf'>
                <label htmlFor='lastName'>
                  <strong>Last Name</strong>
                </label>
                <input
                  id='lastName'
                  type='text'
                  required={true}
                  className='form-control'
                  value={this.state.fullName.last}
                  onChange={this.eventCurrentField.bind(this, 'last')}
                />
              </div>

              <div className='d-grid mt-3'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <StudentsTable students={this.state.foundStudents} title='Found Students:' />
        <br />
        <Social />
      </div>
    );
  }
}

export default Search;
